var cors = require('cors');
const assert = require('assert');
const express = require('express');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.port || 3001;
app.use(cors());

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

app.get('/', (req, res) => {
  console.log('index accessed');
  res.send('it worked');
});



app.listen(port, async () => {
   console.log(`Initiating server on ${port}`)
});



