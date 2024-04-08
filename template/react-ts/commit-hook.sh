#!/bin/bash

# Path to the hooks directory
hooks_dir=".git/hooks"

# Content of the pre-commit file
pre_commit_content='#!/bin/sh
FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed "s| |\\ |g")
[ -z "$FILES" ] && exit 0

# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/prettier --ignore-unknown --write

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
'

# Content of the post-commit file
post_commit_content='#!/bin/sh
git update-index -g

exit 0
'

# Create the hooks directory if it doesn't exist
mkdir -p "$hooks_dir"

# Write the pre-commit file
echo "$pre_commit_content" > "$hooks_dir/pre-commit"

# Write the post-commit file
echo "$post_commit_content" > "$hooks_dir/post-commit"

# Make the files executable
chmod +x "$hooks_dir/pre-commit"
chmod +x "$hooks_dir/post-commit"

echo "pre-commit and post-commit hooks have been set."

