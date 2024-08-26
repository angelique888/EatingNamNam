const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// eslint-disable-next-line consistent-return
const add = async (req, res) => {
  const { to, subject, text, html } = req.body;

  if (!to || !subject || !text) {
    return res
      .status(400)
      .json({ message: "Des champs obligatoires sont manquants" });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${process.env.MAILTRAP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    res.status(200).json({ message: "Email envoyé avec succès", info });
  } catch (error) {
    console.error("Echec de l envoi:", error);
    res.status(500).json({ message: "Echec de l envoi", error });
  }
};

module.exports = {
  add,
};
