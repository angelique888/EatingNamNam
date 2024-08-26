require("dotenv").config();
const nodemailer = require("nodemailer");
const logger = require("../logger");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "475ff7ffe87c75",
    pass: "48970f7aa866c5",
  },
});

transporter.sendMail(
  {
    from: '"Test" <YOUR_MAILTRAP_USER>',
    to: "test@example.com",
    subject: "Test Email",
    text: "This is a test email.",
  },
  (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      
      logger.info("Email sent:", info.response);
    }
  }
);
