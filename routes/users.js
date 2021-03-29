const express = require("express");
const router = express.Router();
const db = require("../models");


// Register
router.post("/register", (req, res) => {
 
    db.user
        .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfbirth: req.body.dateOfbirth
    })
    .then((submitedUser) => res.send(submitedUser)); 
})

// Get Users
router.get("/allUser", (req, res) => {
  db.user.findAll().then((Users) => res.send(Users));
});

module.exports = router;
