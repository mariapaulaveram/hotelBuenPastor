// components/ReservaForm.jsx
import { useState } from 'react';
import styles from '../styles/ReservaForm.module.css';

const ReservaForm = ({ onClose }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ingreso, setIngreso] = useState('');
  const [egreso, setEgreso] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nombre,
      apellido,
      email,
      telefono,
      ingreso,
      egreso,
      comentarios
    };

    try {
      const res = await fetch("http://localhost:3000/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Consulta enviada:", data);

      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
        onClose(); // Cierra el formulario después de mostrar el mensaje
      }, 1000);
    } catch (err) {
      console.error("Error al enviar consulta:", err);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>Reservá tu estadía</h2>

        {mensajeEnviado && (
          <div className={styles.confirmacion}>
            ✅ Tu consulta fue enviada correctamente. ¡Gracias por contactarnos!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          <input type="date" placeholder="Fecha de Ingreso" value={ingreso} onChange={(e) => setIngreso(e.target.value)} required />
          <input type="date" placeholder="Fecha de Egreso" value={egreso} onChange={(e) => setEgreso(e.target.value)} required />
          <textarea placeholder="Comentarios" rows="4" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
          <button type="submit">Enviar consulta</button>
        </form>
      </div>
    </div>
  );
};

export default ReservaForm;
