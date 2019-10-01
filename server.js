const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./src/routes");
const models = require("./src/models");
const connectDb = require("./src/models").connectDb;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// All Api routes
app.use(
  "/api",
  routes.attendees,
  routes.mailing,
  routes.mentors,
  routes.sponsors,
  routes.volunteers
);

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

// Connect to MongoDB then open port on defined port in .env
connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
