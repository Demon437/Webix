const mongoose4 = require("mongoose");

const subscriberSchema = new mongoose4.Schema({
    email: String
}, { timestamps: true });

module.exports = mongoose4.model("Subscriber", subscriberSchema);