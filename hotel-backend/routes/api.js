var express = require('express');
var router = express.Router();
var lugaresModel = require ('./../models/lugaresModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get("/lugares", async function (req, res, next) {
  let lugares = await lugaresModel.getLugares();

  lugares = lugares.map((lugares) => {
    if (lugares.img_id) {
      const imagen = cloudinary.url(lugares.img_id, {
        width: 960,
        height: 200,
        crop: "fill",
      });
      return {
        ...lugares,
        imagen,
      };
    } else {
      return {
        ...lugares,
        imagen: "",
      };
    }
  });
  res.json(lugares);
});

router.post("/contacto", async (req, res) => {
  const mail = {
    to: "mpveramorandini@gmail.com",
    subject: "Contacto web",
    html: `${req.body.nombre} se contactó a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además hizo el siguiente comentario: ${req.body.mensaje} <br> Su teléfono es: ${req.body.telefono}`,
  };  //alt 96 son las comillas inclinadas-interpolacion de strings

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, //estos datos deben councidir con los de .env
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASS,
    }
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: "Mensaje enviado",
  });
});

module.exports = router;