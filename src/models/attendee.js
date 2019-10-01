const mongoose = require("mongoose");

const universities = require('../../client/src/constants');

const attendeeSchema = new mongoose.Schema({
  first: {
    type: String,
    alias: "First Name",
    required: [true, "A first name is required!"],
    lowercase: true,
    minlength: 3
  },
  last: {
    type: String,
    alias: "Last Name",
    required: [true, "A last name is required!"],
    lowercase: true,
    minlength: 3
  },
  email: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "An email is required!"],
    lowercase: true,
    minlength: 7
  },
  phone: {
    type: String,
    alias: "Phone Number",
    match: /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    required: [true, "User phone number required"],
    minlength: 10
  },
  school: {
    type: String,
    alias: "University or High School", 
    enum: universities,
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
    enum: ["hacker", "volunteer", "mentor", "sponsor", "admin", "ADMIN"],
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

module.exports = mongoose.model("Attendee", attendeeSchema);
