var express = require('express');
var router = express.Router();
var lugaresModel = require ('./../models/lugaresModel');
var cloudinary = require('cloudinary').v2;


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



module.exports = router;