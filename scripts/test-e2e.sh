#!/usr/bin/env bash
set -euo pipefail

export NODE_ENV=test

docker compose \
  -f ./database/docker-compose.yml \
  -f ./server/docker-compose.yml \
  up -d --remove-orphans

yarn turbo build
