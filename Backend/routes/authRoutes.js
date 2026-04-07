const express4 = require("express");
const router4 = express4.Router();

const { login } = require("../controller/authController");

router4.post("/login", login);

module.exports = router4;