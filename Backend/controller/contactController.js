const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail"); // 👈 add this

// ✅ Create Contact + Send Email
exports.createContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            company,
            service,
            budget,
            timeline,
            message
        } = req.body;

        // Save to DB
        const newContact = await Contact.create({
            name,
            email,
            phone,
            company,
            service,
            budget,
            timeline,
            message
        });

        // 📧 Send Email to Company
        await sendEmail({
            name,
            email,
            phone,
            company,
            service,
            budget,
            timeline,
            message
        });

        res.status(201).json({
            message: "Message sent successfully",
            data: newContact
        });

    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ message: err.message });
    }
};


// ✅ Get All Contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// ✅ Delete Contact
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};