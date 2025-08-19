import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/LugarDetalle.module.css";

const LugarDetalle = () => {
  const { id } = useParams();
  const [lugar, setLugar] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLugar = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/lugares/${id}`);
        setLugar(response.data);
      } catch (err) {
        console.error("Error al cargar el lugar:", err);
        setError("No se pudo cargar el lugar.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchLugar();
  }, [id]);

  if (loading) return <p className={styles.loading}>Cargando lugar...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!lugar) return null;

  return (
    <section className={styles.detalleWrapper}>
      <div className={styles.imagenWrapper}>
        <img src={lugar.imagen} alt={lugar.titulo} className={styles.imagen} />
        <h2 className={styles.titulo}>{lugar.titulo}</h2>
      </div>


      <div className={styles.texto}>
        <h3 className={styles.subtitulo}>{lugar.subtitulo}</h3>
        <p className={styles.descripcion}>{lugar.cuerpo}</p>
      </div>
    </section>
  );
};

export default LugarDetalle;

