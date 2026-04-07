const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/subscribe", require("./routes/newsletterRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on 5000"));