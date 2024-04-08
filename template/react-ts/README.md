# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite and some ESLint rules.

## Table of Contents

1. [Running the Project](#running-the-project)
2. [Running the Commit Hook Script](#running-the-commit-hook-script)
3. [Folder Structure](#folder-structure)

## Running the Project

To run the project in a local development environment, use the following command:

```shell
npm run dev
```

## Running the Commit Hook Script

To ensure proper execution of the project's commit hook script, follow these steps:

1. **Open a Terminal Window**: Navigate to the project folder in the terminal.
2. **Execute the Script**: Once you're in the project folder, type the following command to execute the script:

    ```bash
    ./commit-hook.sh
    ```

   Press Enter to run the script.
3. 
This will start a development server at http://localhost:5173. You can access the application in your web browser.

## Folder Structure

Here's an overview of the project's folder structure:

Certainly! Here's how you can structure your folder view for the README.md file:

```
[project-name]/
├── .storybook/                   # This folder houses the configuration files for Storybook.
├── src/
│   ├── app/                      # app-wide settings, styles and providers.
│   ├── assets/                   # Static assets like images, fonts, and other files.
│   ├── features/                 # user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch)
│   │   ├── [slice]               # Each slice encapsulates a specific feature
│   │   │   ├── api/              # Logic of API requests (api instances, requests, etc.)
│   │   │   ├── components/       # User Interface components and UI related logic
│   │   │   ├── config/           # Local configuration (constants, enums, meta information)
│   │   │   ├── lib/              # Infrastructure logic (utils/helpers)
│   │   │   ├── model/            # Business logic (store, actions, effects, reducers, etc.)
│   ├── pages/                    # compositional layer to construct full pages from entities, features and widgets.
│   ├── shared/                   # reusable functionality, detached from the specifics of the project/business. (e.g. hooks, redux, utilities)
│   ├── widgets/                  # compositional layer to combine entities and features into meaningful blocks. (e.g. IssuesList, UserProfile)
└── README.md                     # Project README file.
```
