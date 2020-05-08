require('./config/config');

const express = require('express');
const rtsIndex = require('./routes/index');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use(rtsIndex);


// error handler 
app.use((err, req, res, next) => { 
    if (err.name === 'ValidationError') { 
        const valErrors = []; 
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message)); 
        res.status(422).send(valErrors) 
    }
});  

// start server 
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));



