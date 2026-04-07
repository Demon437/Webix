const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // ✅ 1. Mail to Company
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: data.email, // 🔥 important
        subject: "🚀 New Project Inquiry",
        html: `
      <h2>New Inquiry</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
    });

    // ✅ 2. Auto Reply to Client
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: "We received your inquiry",
        html: `
      <h2>Hi ${data.name},</h2>
      <p>Thanks for contacting Webix Infotech 🚀</p>
      <p>Our team will get back to you within 24 hours.</p>
      <br/>
      <p>— Team Webix</p>
    `,
    });

    console.log("✅ Both emails sent");
};

module.exports = sendEmail;