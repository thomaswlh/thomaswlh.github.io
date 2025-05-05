#!/usr/bin/env bash
set -e

# Navigate to project root
dir="$(cd "$(dirname "$0")" && pwd)"
cd "$dir"

# Ensure on source branch
echo "Checking out source branch..."
git checkout source

# Install dependencies
echo "Installing dependencies..."
yarn

# Build
echo "Building project..."
yarn build

# Copy build to temp directory
temp_dir="$(mktemp -d)"
echo "Copying build files to $temp_dir..."
cp -r build/* "$temp_dir"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Clean old files
echo "Removing old files..."
rm -rf ./*

# Copy new build files
echo "Deploying new build..."
cp -r "$temp_dir"/* .

# Cleanup temp directory
echo "Cleaning up..."
rm -rf "$temp_dir"

# Commit and push
echo "Committing deployment..."
git add .
git commit -m "Deploy to main branch: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to origin main..."
git push origin main

# Switch back to source
echo "Returning to source branch..."
git checkout source

echo "Deployment complete."