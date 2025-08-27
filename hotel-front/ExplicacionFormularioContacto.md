# 📄 Componente: Contacto.jsx — Formulario institucional de contacto
## 🔧 Ubicación: /componentes/Contacto.jsx
## 🎯 Propósito: Captura y envía datos de contacto al backend del hotel

- Este componente renderiza el formulario de contacto institucional del hotel.
- Utiliza estados locales para manejar los datos del formulario, el estado de envío y los mensajes de respuesta.
- El formulario es controlado: cada campo está vinculado al estado `formData` y se actualiza mediante `onChange`.
- Al enviar, se realiza una petición POST al backend usando Axios.
- Si la respuesta es exitosa, se muestra un mensaje y se resetea el formulario.
- Si hay error, se muestra un mensaje temporal de error.
- Los estilos se aplican mediante CSS Modules desde Contacto.module.css.



## 📦 Importaciones
import React, { useState } from "react"; //hook de React para manejar estados locales.

## 🧩 Estado inicial del formulario
```const Contacto = () => {   
    const initialForm = { //Define la estructura base del formulario, permite reiniciarlo fácilmente y mantener la lógica modular.
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
    };
```

## ⚙️ Estados del componente
    - sending: indica si se está enviando el formulario (útil para mostrar un spinner o deshabilitar el botón).
    - msg: almacena el mensaje de respuesta (éxito o error).
    - formData: contiene los datos actuales del formulario.

```    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);
```

## 📝 Actualización de campos (handleChange)
       - Actualiza el estado del formulario en tiempo real según el campo modificado
       - Captura el cambio en cualquier campo del formulario.
       - Usa el atributo name del input para actualizar el campo correspondiente en formData.

```    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((oldData) => ({
            ...oldData,
            [name]: value,
        }));
    };
```

## 🚀 Envío del formulario (handleSubmit)
       - Envía los datos del formulario al backend y gestiona la respuesta
       - Limpia el mensaje anterior y activa el estado de envío.

```    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setSending(true);
```

## 📡 Petición al backend
    - Envía los datos del formulario al endpoint /api/contacto. Se espera que el backend devuelva un objeto con message y error

```  try {
    const response = await axios.post("http://localhost:3000/api/contacto", formData);
```
    
   ## ✅ Manejo de respuesta exitosa
 Desactiva el estado de envío. Muestra el mensaje de éxito recibido desde el backend.

 Si no hay error (error === false), reinicia el formulario al estado inicial.

 La lógica de ocultamiento del mensaje se gestiona automáticamente mediante useEffect, según el tipo de respuesta.

```
setSending(false);
setMsg(response.data.message);

if (response.data.error === false) {
  setFormData(initialForm);
}
```

## ❌ Manejo de errores
Captura cualquier excepción en la petición POST.

Muestra un mensaje institucional de error para el usuario.

El mensaje se oculta automáticamente mediante useEffect, sin necesidad de temporizadores manuales.

``` } catch (error) {
  setSending(false);
  setMsg("Error al enviar el mensaje");
}
```

## 🎨 Renderizado del componente
- Este bloque JSX define la estructura visual del formulario de contacto institucional. Se divide en dos columnas:

### 🧭 Estructura general
**holder:** contenedor principal del componente.

**contacto:** agrupa las dos columnas (formulario y datos institucionales).


#### 📝 Columna izquierda: formulario

- Usa onSubmit={handleSubmit} para interceptar el envío y ejecutar la lógica definida.
- Cada campo está vinculado al estado formData, lo que lo convierte en un formulario controlado.

1. **name:** clave que se usa para actualizar el estado.

2. **value:** vinculado al estado formData.

3. **onChange:** ejecuta handleChange para actualizar el estado en tiempo real.

4. **placeholder:** guía visual para el usuario.

5. Esto se repite para: apellido, email, telefono, mensaje (este último usa <textarea> por ser texto largo)
                
```    <form className={styles.formulario} onSubmit={handleSubmit}>
    <p>
        <input type="text"name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Nombre'/>                      
    </p>
                            
    </p>
```

## 🔄 Feedback visual de envío
- Si sending es true, muestra el mensaje "Enviando...".
- Si msg tiene contenido, muestra el mensaje de respuesta del backend (éxito o error).

```    {sending && <p className={styles.estado}>Enviando...</p>}
    {msg && <p className={styles.estado}>{msg}</p>}
    <div className={styles.botonWrapper}>
    <input type="submit" value="Enviar" className={styles.boton} />
    </div>
    </form>
```
                

       