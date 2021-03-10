const express = require("express");
const router = express.Router();
const db = require("../models");
const moment = require('moment');
const {isValidDate} = require("../validateDate");

// Register
router.post("/register", (req, res) => {
  let dateOfbirth = isValidDate(req.body.dateOfbirth);
  if (dateOfbirth.isValid) {
    db.user
        .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfbirth: dateOfbirth.date,
    })
    .then((submitedUser) => res.send("Successfuly registered"));
  } else {
    res.send(dateOfbirth.message);
  }
});

// Get Users
router.get("/allUser", (req, res) => {
  db.user.findAll().then((Users) => res.send(Users));
});

module.exports = router;
