const engine = require('../engine');


const generate = (supplierName) => {

    const generatedSupplier = engine.create(supplierName);
    console.log(generatedSupplier);

};

module.exports = generate;
