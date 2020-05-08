
let test = (req,res) => {
    const data = require('../db/test.db');
    if (!data) res.status(400).json({message: 'error'});
    res.status(200).json( data.product)
};

module.exports = {
    test
}; 
