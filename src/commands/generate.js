const engine = require('../engine');


const generate = (supplierPrefix) => {

    const generatedSupplier = engine.create({ supplierPrefix });
    console.log(generatedSupplier);

};

module.exports = generate;
