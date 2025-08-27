# 🖼️ Frontend Institucional – Hotel Buen Pastor

Interfaz web desarrollada en React + Vite para el sitio institucional del Hotel Buen Pastor. Incluye formularios funcionales, visualización de lugares turísticos. El diseño prioriza sobriedad, claridad y experiencia de usuario.

---

## 📁 Estructura del proyecto

/hotel-front
├── public/                  # Archivos estáticos (favicon, imágenes base)
└── src/
    ├── componentes/
    │   ├── layouts/         # Header, Nav, Footer, Layout general
    │   ├── lugares/         # LugarItem, LugarDetalle
    │   ├── Contacto.jsx     # Formulario institucional
    │   ├── ReservaForm.jsx  # Formulario emergente de reserva
    │   ├── Galeria.jsx      # Galería institucional de imágenes
    │   ├── HomeCarousel.jsx # Carrusel de bienvenida
    │   ├── Servicios.jsx    # Sección de prestaciones del hotel
    │   └── Ubicacion.jsx    # Mapa y datos de contacto
    ├── hooks/
    │   └── useScrollToHash.js  # Scroll automático a secciones con hash
    ├── paginas/             # Vistas principales (Home, Lugares)
    ├── styles/              # Estilos CSS Modules por componente
    ├── App.jsx              # Configuración de rutas y scroll, se monta en #root mediante main.jsx
    ├── main.jsx             # Punto de entrada y renderizado
    ├── index.css            # Estilos globales
    └── index.html           # Entrada HTML para Vite
    
Falta desarrollar promociones que se ve en el nav...

## ⚙️ Instalación y ejecución 
cd hotel-front
npm install
npm run dev

El proyecto usa Vite (puerto por defecto: 5173)

Asegurarse de que el backend esté corriendo en localhost:3000

## 🔗 Conexión con el backend
Las peticiones se realizan vía Axios o Fetch a rutas del backend Express:

POST /api/contacto → Envía mensaje institucional

POST /api/reserva → Solicita reserva con fechas

GET /api/lugares → Muestra lista de lugares turísticos

GET /api/lugares/:id → Detalle de lugar específico

## 📬 Envío de formularios – Contacto & Reserva
El backend gestiona dos formularios institucionales que se comunican con el frontend mediante peticiones POST: uno para contacto general y otro para reservas. Ambos utilizan Nodemailer para enviar correos al equipo del hotel, encapsulando la lógica de transporte en utils/mailer.js.

La ruta /api/contacto espera los campos nombre, email, telefono y mensaje. El correo se envía desde el remitente institucional (process.env.MAIL_USER) hacia el mismo destinatario, con asunto "Contacto web" y cuerpo HTML que incluye los datos del mensaje.

Por otro lado, la ruta /api/reserva recibe un conjunto más amplio de campos: nombre, apellido, email, telefono, ingreso, egreso y comentarios. En este caso, el correo se envía desde el email del usuario (from: email) hacia el correo institucional, con asunto "Nueva consulta de reserva" y cuerpo HTML que detalla la solicitud.

Ambas rutas utilizan el mismo transporter (utils/mailer.js) y responden con mensajes JSON que confirman el envío. Sin embargo, difieren en el código de estado HTTP: contacto responde con 201 Created, mientras que reserva utiliza 200 OK. En caso de error, contacto devuelve { error: true, message: "..." }, y reserva responde con { error: "...", status: 500 }.

## 🧪 Verificación funcional
Acceder a /contacto

Completar y enviar el formulario

Verificar mensaje de éxito y limpieza del formulario

Activar ReservaForm desde la vista correspondiente

Completar y enviar

Confirmar mensaje de éxito y cierre automático

Navegar a /lugares

Verificar carga de datos e imágenes desde Cloudinary

Acceder a /lugares/:id

Confirmar renderizado de título, subtítulo e imagen

Validar scroll automático al cambiar de ruta o al usar hash (#)

Confirmar renderizado de componentes institucionales:

Galeria, HomeCarousel, Servicios, Ubicacion

## 🧭 Navegación y Layout
La navegación se gestiona con react-router-dom y se encapsula en el componente Layout.jsx, que incluye:

<Header /> institucional

<Nav /> con rutas públicas

<Footer /> fijo en todas las vistas

<Outlet /> para renderizar vistas dinámicas

Además, se integran dos comportamientos de scroll:

ScrollToTop en App.jsx: scroll suave al cambiar de ruta

useScrollToHash en hooks/: scroll automático a secciones con hash (#section)

## 📦 Dependencias clave
React

Vite

Axios

react-router-dom

CSS Modules

Bootstrap

FontAwesome


