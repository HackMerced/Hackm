const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 3001;

//const api = require('./server/api/routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
//app.use('/api', api);



app.get('/', (req, res) => {

    console.log('index accessed');
    res.send("It worked");
  
});



app.listen(port, async () => {
   console.log(`Initiating server on ${port}`)
});



