const mongoose = require("mongoose");

const hackerSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    index: {
      unique: true
    },
    validate: {
      validator(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e
        );
      },
      message: "{VALUE} is not a valid email!"
    },
    required: [true, "User email required"]
  },
  phone: {
    type: String,
    validate: {
      validator(e) {
        return /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e);
      },
      message: "{VALUE} is not a valid phone number!"
    },
    required: [true, "User phone number required"]
  },
  school: {
    type: String,
    required: [true, "School required"]
  },
  age: {
    type: Number,
    min: [13, "Too young"],
    max: [30, "Too old"],
    required: [true, "Age required"]
  },
  gender: {
    type: String,
    enum: [
      "male",
      "female",
      "lesbian",
      "gay",
      "bisexual",
      "transgender",
      "queer",
      "neither"
    ],
    required: [true, "Gender required"]
  },
  skills: [String],
  interests: [String],
  programmingLanguages: [String],
  dietaryRestrictions: [String],
  allergies: [String],
  specialNeeds: String,
  shirtSize: {
    type: String,
    required: [true, "Shirt size required"]
  },
  previousHackathons: {
    type: Number,
    required: [true, "Number of previous hackathons required"]
  },
  haveTeam: {
    type: Boolean,
    required: [true, "Please specify if you have a team"]
  },
  teamEmails: [String],
  linkedin: String,
  github: String,
  otherSites: String,
  resume: String,
  applicationStatus: {
    type: String,
    default: "submitted",
    enum: ["submitted", "accepted", "declined", "waitListed", "checkedIn"],
    required: [true, "Application status required"]
  },

  privileges: {
    type: String,
    required: [true, "User privileges required"]
  },
  qr: {
    type: String,
    index: {
      unique: true,
      sparse: true
    }
  }
});

hackerSchema.pre("save", function lowerCaseFields(next) {
  this.firstName = this.firstName.toLowerCase();
});

module.exports = mongoose.model("Hacker", hackerSchema);
