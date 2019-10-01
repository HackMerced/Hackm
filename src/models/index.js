const mongoose = require('mongoose');
const Attendee = require('./attendee');
const Team = require('./team');

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URI_TESTS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

var models = { Attendee }
module.exports = { connectDb, models };