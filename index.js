#! /usr/bin/env node

const mason = require('commander');
const { version } = require('./package.json');

// commands
const create = require('./commands/create').default;
const setup = require('./commands/setup');

mason
    .version(version);

mason
    .command('setup [env]')
    .description('run setup commands for all envs')
    .action(setup);

mason
    .command('create <ticketId>')
    .description('creates a new game')
    .action(create);

mason
    .command('*')
    .action(() => {
        mason.help();
    });

mason.parse(process.argv);

if (!mason.args.length) {
    mason.help();
}