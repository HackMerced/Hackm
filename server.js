const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const hackers = require('./src/routes/hackers');
const mailing = require('./src/routes/mailing');
const mentors = require('./src/routes/mentors');
const sponsors = require('./src/routes/sponsors');
const volunteers = require('./src/routes/volunteers');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', hackers, mailing, mentors, sponsors, volunteers);

app.use(express.static(path.join(__dirname, '/client/build/')))

app.listen(port, async () => {
   console.log(`Initiating server on ${port}`)
});