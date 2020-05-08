const express = require('express'); 
const app = express();

app.use('/api', require('./test.routes'));

module.exports = app; 
