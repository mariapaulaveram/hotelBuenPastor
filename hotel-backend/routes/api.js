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

router.get("/lugares/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const lugar = await lugaresModel.getLugarById(id); 

    if (!lugar) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    // Procesar imagen si existe
    if (lugar.img_id) {
      lugar.imagen = cloudinary.url(lugar.img_id, {
        width: 960,
        height: 200,
        crop: "fill",
      });
    } else {
      lugar.imagen = "";
    }

    res.json(lugar);
  } catch (error) {
    console.error("Error al obtener lugar por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});



router.post("/contacto", async (req, res) => {
  const mail = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "Contacto web",
    html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} <br> Además hizo el siguiente comentario: ${req.body.mensaje} <br> Su teléfono es: ${req.body.telefono}`,
  };

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    console.log("Enviando mail de contacto a:", mail.to);
    await transport.sendMail(mail);
    console.log("Mail enviado correctamente");
    res.status(201).json({
      error: false,
      message: "Mensaje enviado",
    });
  } catch (error) {
    console.error("Error al enviar el mail:", error);
    res.status(500).json({
      error: true,
      message: "No se pudo enviar el mensaje",
    });
  }
});



module.exports = router;