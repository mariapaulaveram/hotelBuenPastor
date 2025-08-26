# Proyecto Institucional - Hotel Buen Pastor

Sistema web institucional que integra frontend en React y backend en Express. Permite reservas, contacto, autenticación y visualización de lugares turísticos.

Inspirado en el Hotel Buen Pastor, este proyecto busca recrear una experiencia institucional profesional, con énfasis en diseño sobrio, formularios funcionales y autenticación segura.

---

## 🧩 Estructura del proyecto

- `/hotel-front`: cliente en React + Vite
- `/hotel-backend`: servidor en Express + Nodemailer
- `/docs`: documentación técnica modular

---

## 🚀 Instalación general

El backend se ejecuta con nodemon por defecto, gracias al script `"start"` en `package.json`. No es necesario usar `npm run dev`.

```bash
cd hotel-front
npm install
npm run dev

cd hotel-backend
npm install
npm start
```

## 📦 Dependencias clave

### Frontend
- React
- Vite
- Axios
- CSS Modules

### Backend
- Express
- Nodemailer
- dotenv
- express-session
- mysql2
- cloudinary


## 📬 Envío de mails

El sistema incluye dos formularios conectados al backend para enviar correos institucionales:

### 🔹 Formulario de contacto
- **Ruta**: `POST /api/contacto`
- **Frontend**: `Contacto.jsx`
- **Backend**: `routes/contacto.js`
- **Contenido**: nombre, email, teléfono y mensaje
- **Destino**: correo definido en `MAIL_USER`

### 🔹 Formulario de reserva
- **Ruta**: `POST /api/reserva`
- **Frontend**: `ReservaForm.jsx`
- **Backend**: `routes/reserva.js`
- **Contenido**: nombre, apellido, email, teléfono, fechas y comentarios
- **Destino**: mismo correo institucional


## 🧪 Verificación del sistema

1. Acceder al formulario de contacto y enviar un mensaje  
2. Confirmar que aparece el aviso de “Mensaje enviado” en el frontend  
3. Verificar que el correo llega correctamente al `MAIL_USER`  
4. Acceder al formulario de reserva y enviar una solicitud  
5. Confirmar que el correo de reserva llega correctamente  
6. Probar login de administrador  
   - Acceder al formulario en `/admin`  
   - Ingresar credenciales válidas  
   - Confirmar redirección al panel de administración  
   - Verificar persistencia de sesión y cierre de sesión  
7. Acceder a la sección de lugares turísticos  
   - Confirmar que los datos se cargan desde la base de datos  
   - Verificar que las imágenes se muestran correctamente vía Cloudinary  
   - Probar los endpoints `GET /api/lugares` y `GET /api/lugares/:id`

