const express = require("express");
const User = require("../Models/User"); 
const router = express.Router();
const {list, createUser, checkUser} = require('../Controllers/register')


router.get("/", list)
router.post("/register", createUser)
router.post("/login", checkUser)


module.exports = router;
