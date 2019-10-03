const mongoose = require("mongoose");

const universities = require("../constants/universities");

const attendeeSchema = new mongoose.Schema({
  first: {
    type: String,
    alias: "First Name",
    required: [true, "Attendee's first name is required!"],
    lowercase: true,
    minlength: 3
  },
  last: {
    type: String,
    alias: "Last Name",
    required: [true, "Attendee's last name is required!"],
    lowercase: true,
    minlength: 3
  },
  email: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Attendee's email is required!"],
    lowercase: true,
    minlength: 7
  },
  phone: {
    type: String,
    alias: "Phone Number",
    match: /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    required: [true, "Attendee's phone number is required"],
    minlength: 10
  },
  school: {
    type: String,
    alias: "University",
    enum: universities,
    required: [true, "Attendee's school listed is required"]
  },
  age: {
    type: Number,
    alias: "Age of Attendee",
    match: /^([0-9])(0)$/,
    min: [13, "Too young"],
    max: [30, "Too old"],
    required: [true, "Attendee's age is required"]
  },
  gender: {
    type: String,
    alias: "Attendee's Gender",
    lowercase: true,
    enum: [
      "male",
      "female",
      "lesbian",
      "gay",
      "bisexual",
      "transgender",
      "queer",
      "other"
    ],
    required: [true, "Attendee's Gender is required"]
  },
  // interests: [String],
  // programmingLanguages: [String],
  // dietaryRestrictions: [String],
  // specialNeeds: String,
  shirt: {
    type: String,
    alias: "Shirt Size",
    lowercase: true,
    enum: ['xs', 's', 'm', 'l', 'xl'],
    required: [true, "Shirt size is required"]
  },
  hackathons: {
    type: Number,
    alias: "Number of previous hackathons",
    min: [0, "First time at a hackathon"],
    required: [true, "Number of previous hackathons are required"]
  },
  team: {
    type: Boolean,
    alias: "Does the Attendee have a team",
    required: [true, "Please specify if you have a team"]
  },
  linkedin: String,
  github: String,
  // otherSites: String,
  // resume: String,
  applicationStatus: {
    type: String,
    default: "submitted",
    enum: ["submitted", "accepted", "declined", "waitListed", "checkedIn"],
    required: [true, "Application status required"]
  },
  privileges: {
    type: String,
    alias: "Which type or attendee are they?",
    default: "hacker",
    enum: ["hacker", "volunteer", "mentor", "sponsor", "admin", "ADMIN"],
    required: [true, "User privileges required"]
  }
});

module.exports = mongoose.model("Attendee", attendeeSchema);
