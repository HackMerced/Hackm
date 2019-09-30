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
app.use(
  "/api",
  routes.hackers,
  routes.mailing,
  routes.mentors,
  routes.sponsors,
  routes.volunteers
);

app.use(express.static(path.join(__dirname, "/client/build/")));

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });
  const user2 = new models.User({
    username: 'ddavids',
  });
  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });
  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });
  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();
  await user1.save();
  await user2.save();
};
