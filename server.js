const assert = require('assert');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const api = require('./api/routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', api);

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



