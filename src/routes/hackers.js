const router = require("express").Router();
const hacker = require("../models").models.Hacker;

router.get("/hacker/:id", async (req, res) => {});

router.get("/hackers", async (req, res) => {
  res.send("hello");
});

router.post("/hacker/:id", async (req, res) => {});

router.post("/hackers", async (req, res) => {
  console.log('re: ', req);
  var hackers = [{ username: "Jean" }, { username: "Luc" }];
  hacker.insertMany(hackers, (error, docs) => {
    if (error) {
      res.send(error);
    }

    if (docs) {
      res.send(docs);
    }
  });
});

module.exports = router;
