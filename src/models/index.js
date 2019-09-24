const mongoose = require('mongoose');
const Hacker = require('./hacker');
const Team = require('./team');

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

var models = {Hacker, Team}
module.exports = { connectDb, models };