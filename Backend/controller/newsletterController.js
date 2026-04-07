const Subscriber = require("../models/Subscriber");

exports.subscribe = async (req, res) => {
    try {
        const { email } = req.body;

        const exists = await Subscriber.findOne({ email });
        if (exists) return res.json({ message: "Already subscribed" });

        const sub = await Subscriber.create({ email });

        res.status(201).json({ message: "Subscribed", data: sub });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSubscribers = async (req, res) => {
    try {
        const subs = await Subscriber.find();
        res.json(subs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
