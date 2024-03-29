const express = require("express");
const router = express.Router();
const usersController = require("./users.controller");
var bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const jsonParser = bodyParser.json();

const middleware = async (req, res, next) => {
  jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, function(err) {
      if (err) {
        return res.status(400).json(err)
      }
      return next();
  })
}

router.route("/")
  .get(middleware, usersController.getAllUsers)
  .post(jsonParser, usersController.createUser);

router
  .route("/:id")
  .get(usersController.getUser)
  .delete(usersController.removeUser)
  //.put(usersController.updateUser);
module.exports = router;
    //.put(usersController.update);
 
