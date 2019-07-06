const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 3000;

const api = require('./server/api/routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
//app.use('/api', api);



if(process.env.ENVIORNMENT === 'development'){
    app.use(express.static(path.resolve(__dirname, './client/public')));
}else if (process.env.ENVIORNMENT === 'production') {
    app.use(express.static(path.resolve(__dirname, './client/build')));

}



app.listen(port, async () => {
   console.log(`Initiating server on ${port}`)
});



