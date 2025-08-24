// routes/reserva.js
const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  const { nombre, apellido, email, telefono, ingreso, egreso, comentarios } = req.body;

  const transporter = require("../utils/mailer");

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: "Nueva consulta de reserva",
    html: `
      <h3>Consulta de reserva</h3>
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Ingreso:</strong> ${ingreso}</p>
      <p><strong>Egreso:</strong> ${egreso}</p>
      <p><strong>Comentarios:</strong> ${comentarios}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ mensaje: "Consulta enviada correctamente" });
  } catch (err) {
    console.error("Error al enviar correo:", err);
    res.status(500).json({ error: "No se pudo enviar la consulta" });
  }
});

module.exports = router;
