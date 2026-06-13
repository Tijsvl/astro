#!/bin/bash
set -e

BUILD_BRANCH="build"
BUILD_DIR="dist"

CURRENT_SHA=$(git rev-parse HEAD)
LAST_DEPLOYED_SHA=$(git show origin/$BUILD_BRANCH:.deploy-sha 2>/dev/null || echo "")

if [ "$CURRENT_SHA" = "$LAST_DEPLOYED_SHA" ]; then
  echo "Current commit already deployed. Skipping build."
  exit 0
fi

npm run build

echo "$CURRENT_SHA" > "$BUILD_DIR/.deploy-sha"

git add "$BUILD_DIR" -f
git commit -m "Build site"
git subtree push --prefix "$BUILD_DIR" origin "$BUILD_BRANCH"