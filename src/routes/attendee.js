const router = require("express").Router();
const Attendee = require("../models").models.Attendee;

router.get("/attendee/:id", async (req, res) => {});

router.post("/attendee/:id", async (req, res) => {});

/**
 * @api {post} api/attendees Add Attendee(s)
 * @apiDescription Adds an array of new Attendee(s)
 * @apiVersion 1.0.0
 * @apiName Add Attendee(s)
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization  User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [perPage=1]  Users per page
 * @apiParam  {String}             [name]       User's name
 * @apiParam  {String}             [email]      User's email
 * @apiParam  {String=user,admin}  [role]       User's role
 *
 * @apiSuccess {Object[]} attendee(s) List of hacker(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.post("/attendees", async (req, res) => {
  var attendees = [{ name: "Shiv" }, { name: "Manjot" }, { name: "Adrian" }];
  Attendee.insertMany(attendees, (error, docs) => {
    if (error) {
      res.send(error);
    }

    if (docs) {
      res.send(docs);
    }
  });
});

module.exports = router;
