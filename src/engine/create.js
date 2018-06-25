const template = require('lodash/template');
const fs = require('fs');
const path = require('path');
const templatesPath = `${__dirname}/../templates`;


const create = ({ supplierPrefix }) => {

    const requestTemplateFile = 'hotel-search-process.tmp';
    const requestTemplatePath = path.join(templatesPath, requestTemplateFile);
    const readFileOptions = { encoding: 'UTF-8' };
    const requestTemplateString = fs.readFileSync(requestTemplatePath, readFileOptions);
    const compile = template(requestTemplateString);
    return compile({ supplierPrefix });

};


module.exports = create;