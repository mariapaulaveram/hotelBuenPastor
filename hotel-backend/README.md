# Backend Institucional – Hotel Buen Pastor

Servidor Express que gestiona reservas, contacto, autenticación y visualización de lugares turísticos. Modularizado por rutas, servicios y controladores, con envío de mails vía Nodemailer y persistencia de sesiones para administradores.


## 🚀 Instalación
El servidor corre con nodemon para facilitar el desarrollo. Ver scripts en package.json.
```bash
git clone https://github.com/mariapaulaveram/hotelBuenPastor/hotel-backend.git  #revisar la ruta
cd hotel-backend
npm install
npm start 
```

## 📁 Estructura del proyecto

hotel-backend/
├── app.js            # Configuración principal de Express
├── bin/www           # Punto de entrada del servidor
├── routes/           # Rutas institucionales (reserva, contacto, lugares, login)
├── models/           # Acceso a datos (lugares, usuarios)
├── utils/            # Configuración de Nodemailer y helpers
├── views/            # Vistas institucionales 
├── public/           # Archivos estáticos (CSS, imágenes)



## 🔐 Autenticación 

Administradores: login con sesiones (POST /admin/login)

Protección de rutas con middleware personalizado

Separación clara de flujos y documentación de cada tipo de login

“No se utiliza JWT ya que el sistema es exclusivamente para administradores.”


## 📬 Envío de mails
Servicio modularizado en utils/mailer.js

Formularios conectados:
Contacto	POST /api/contacto	routes/contacto.js	MAIL_USER
Reserva	POST /api/reserva	routes/reserva.js	MAIL_USER


## Variables en .env:
env
MAIL_USER=correo@institucional.com
MAIL_PASS=clave_de_aplicación


## 🌍 Lugares turísticos
GET /api/lugares → lista de lugares

GET /api/lugares/:id → detalle

Imágenes gestionadas con Cloudinary

Datos desde models/lugaresModel.js

## 🧪 Validaciones y logs
Validación de campos con middleware

Logs en consola para seguimiento de errores

Respuestas JSON estandarizadas

