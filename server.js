const assert = require('assert');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const hackers = require('./routes/hackers');
const mailing = require('./routes/mailing');
const mentors = require('./routes/mentors');
const sponsors = require('./routes/sponsors');
const volunteers = require('./routes/volunteers');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', hackers, mailing, mentors, sponsors, volunteers);

// const client = new MongoClient(process.env.uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("users").collection("hackers");
//   console.log(collection);
  
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//     console.log(docs);
//   });
//   client.close();
// });

app.use(express.static(path.join(__dirname, '/client/build/')))

app.listen(port, async () => {
   console.log(`Initiating server on ${port}`)
});