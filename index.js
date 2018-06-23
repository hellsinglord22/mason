#! /usr/bin/env node

const mason = require('commander');
const { version } = require('./package.json');
const { generate } = require('./src/commands');


mason
    .version(version);


mason
    .command('generate <supplierName>')
    .description('Generate a supplier directory for hotel connect')
    .action(generate);

mason.parse(process.argv);

if (!mason.args.length) {
    mason.help();
}
