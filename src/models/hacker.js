const mongoose = require('mongoose');

const hackerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
});

// hackerSchema.statics.findByLogin = async function (login) {
//   let user = await this.findOne({
//     username: login,
//   });
//   if (!user) {
//     user = await this.findOne({ email: login });
//   }
//   return user;
// };

// hackerSchema.pre('remove', function(next) {
//   this.model('Team').deleteMany({ hacker: this._id }, next);
// });

module.exports = mongoose.model('Hacker', hackerSchema);