const express3 = require("express");
const router3 = express3.Router();

const { subscribe, getSubscribers } = require("../controller/newsletterController");
const { protect: protect2 } = require("../middlewares/authMiddleware");

router3.post("/", subscribe);
router3.get("/", protect2, getSubscribers);

module.exports = router3;
