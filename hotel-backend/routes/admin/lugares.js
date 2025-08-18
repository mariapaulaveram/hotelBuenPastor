var express = require('express');
var router = express.Router();
var lugaresModel = require('../../models/lugaresModel');
var util = require('util');
var cloudinary = require('cloudinary').v2; //es la version de cloudinary
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/*para listar los lugares de interes */
router.get('/', async function(req, res, next) {

  var lugares = await lugaresModel.getLugares();

  lugares = lugares.map(lugar => {
    if (lugar.img_id) {
      const imagen = cloudinary.image(lugar.img_id, {
        width: 70,
        height: 70,
        crop: 'fill' //pad
      });
      return {
        ...lugar,
        imagen
      }
    }else{
      return{
        ...lugar,
        imagen:''
      }
    }
  });

  res.render('admin/lugares',{ 
    layout:'admin/layout', 
    persona: req.session.nombre,
    lugares
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async(req, res, next)=>{
  try{

    var img_id = '';
    if (req.files && Object.keys(req.files).length >0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo !=""){
      await lugaresModel.insertLugares({
        ...req.body, 
        img_id
      });
      res.redirect('/admin/lugares')
    } else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout', 
      error:true,
      message: 'No se cargo el lugar de interes'
    })
  }
})

/*para eliminar un lugar de interes */
router.get('/eliminar/:id', async(req, res, next)=>{
  var id= req.params.id;

let lugar = await lugaresModel.getLugarById(id);
if (lugar.img_id){
  await (destroy(lugar.img_id));
}

  await lugaresModel.deleteLugaresById(id);
  res.redirect('/admin/lugares');

});

/*para mostrar el formulario y mostar un solo lugar de interes */

router.get('/modificar/:id', async(req, res, next)=>{
  var id= req.params.id;
console.log(req.params.id);
var lugar = await lugaresModel.getLugarById(id);


res.render('admin/modificar', { //modificar.hbs
  layout: 'admin/layout',
  lugar
})

});

/*para modificar el lugar de interes */

router.post('/modificar', async(req, res, next)=>{
  try {

      let img_id = req.body.img_original;
      let borrar_img_vieja = false;
      if(req.body.img_delete === "1"){
        img_id = null;
        borrar_img_vieja = true;
      }else{
        if (req.files && Object.keys(req.files).length > 0){
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original){
        await (destroy(req.body.img_original));
      }


    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    console.log(obj)

    await lugaresModel.modificarLugaresById(obj, req.body.id);
    res.redirect('/admin/lugares');
  } catch (error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el lugar de interes'
    })
  }
})

module.exports = router;
