#!/usr/bin/env node

import * as p from '@clack/prompts';
import {setTimeout} from 'node:timers/promises';
import color from 'picocolors';
import * as fs from 'fs';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import createDirectoryContents from './create-directory-contents.js';
import {exec} from 'child_process';
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

async function main() {
    console.clear();

    await setTimeout(1000);

    p.intro(`${color.bgCyan(color.black(' generate-template'))}`);

    const project = await p.group(
        {
            name: () =>
                p.text({
                    message: 'Project name?',
                    placeholder: '.project-name',
                    validate: (value) => {
                        if (!value) return 'Please enter a project name';
                        if (!(/^([A-Za-z\-\\_\d])+$/.test(value))) return 'Project name may only include letters, numbers, underscores and hyphen.';
                    },
                }),
            type: ({results}) =>
                p.select({
                    message: `What project template would you like to generate?`,
                    placeholder: 'Use arrow-keys. Return to submit',
                    options: CHOICES.map(item => ({value: item, label: item})),
                }),
            install: () =>
                p.confirm({
                    message: 'Install dependencies?',
                    initialValue: false,
                }),
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    const templatePath = `${__dirname}/templates/${project.type}`;
    const projectPath = `${CURR_DIR}/${project.name}`;
    fs.mkdirSync(`${CURR_DIR}/${project.name}`);
    createDirectoryContents(templatePath, project.name);

    // Change directory to project folder
    process.chdir(projectPath);

    // initialize git
    const gitInitSpinner = p.spinner();
    gitInitSpinner.start("Initializing git repository");
    exec('git init', (gitInitError, gitInitStdout, gitInitStderr) => {
        gitInitSpinner.stop("Initialized git repository.");
        if (gitInitError) {
            console.error(`git init error: ${gitInitError.message}`);
            return;
        }
        if (gitInitStderr) {
            console.error(`${gitInitStderr}`);
            return;
        }
        console.log(`git init stdout: ${gitInitStdout}`);
    });

    await setTimeout(2000);

    // Give execute permission to commit-hook.sh
    exec('chmod +x commit-hook.sh', (chmodError, chmodStdout, chmodStderr) => {
        if (chmodError) {
            console.error(`chmod error: ${chmodError.message}`);
            return;
        }
        if (chmodStderr) {
            console.error(`chmod stderr: ${chmodStderr}`);
            return;
        }
        console.log(`chmod stdout: ${chmodStdout}`);
    });

    await setTimeout(2000);

    //Run the git hooks
    const precommitSpinner = p.spinner();
    precommitSpinner.start("Running the Commit Hook Script");
    exec('./commit-hook.sh', (gitInitError, gitInitStdout, gitInitStderr) => {
        precommitSpinner.stop();
        if (gitInitError) {
            console.error(`git hook error: ${gitInitError.message}`);
            return;
        }
        if (gitInitStderr) {
            console.error(`git hook stderr: ${gitInitStderr}`);
            return;
        }
        console.log(`git hook stdout: ${gitInitStdout}`);
    });

    await setTimeout(2000);

    if (project.install) {

        const npm = p.spinner();
        npm.start('Installing via npm');

        exec('npm install', (error, stdout, stderr) => {
            npm.stop('Installed via npm');
            if (error) {
                console.error(`npm install error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`npm install stderr: ${stderr}`);

                let nextSteps = `cd ${project.name}        \nnpm run dev`;
                p.note(nextSteps, 'Next steps.');
                p.outro(`Problems? ${color.underline(color.cyan('eshanwp@gmail.com'))}`);

                return;
            }
            console.log(`npm install stdout: ${stdout}`);
        });
    } else {
        let nextSteps = `cd ${project.name}        \nnpm install        \nnpm run dev`;
        p.note(nextSteps, 'Next steps.');
        p.outro(`Problems? ${color.underline(color.cyan('eshanwp@gmail.com'))}`);
    }
}

main().catch(console.error);