// routes/contacto.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  const mail = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "Contacto web",
    html: `
      <h3>Nuevo mensaje de contacto</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `,
  };

  const transport =  require("../utils/mailer");

  try {
    await transport.sendMail(mail);
    res.status(201).json({ error: false, message: "Mensaje enviado" });
  } catch (error) {
    res.status(500).json({ error: true, message: "No se pudo enviar el mensaje" });
  }
});

module.exports = router;
