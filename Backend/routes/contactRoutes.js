const express2 = require("express");
const router2 = express2.Router();

const { createContact, getAllContacts, deleteContact } = require("../controller/contactController");
const { protect } = require("../middlewares/authMiddleware");

router2.post("/", createContact);
router2.get("/", protect, getAllContacts);
router2.delete("/:id", protect, deleteContact);

module.exports = router2;