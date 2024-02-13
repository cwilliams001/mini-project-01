#!/bin/sh

sleep 2
npx knex migrate:rollback

sleep 2
npx knex migrate:latest

sleep 2
npx knex seed:run

node index.js