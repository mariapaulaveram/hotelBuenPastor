import styles from '../styles/Galeria.module.css';

const imagenes = [
  "/images/galeria/galeria1.jpg",
  "/images/galeria/galeria2.jpg",
  "/images/galeria/galeria3.jpg",
  "/images/galeria/galeria4.jpg",
  "/images/galeria/galeria5.jpg",
  "/images/galeria/galeria6.jpg",
  "/images/galeria/galeria7.jpg",
  "/images/galeria/galeria8.jpg",
];

function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2 className={styles.titulo}>Nuestras instalaciones</h2>
      <div className={styles.grid}>
        {imagenes.map((src, index) => (
          <div key={index} className={styles.item}>
            <img src={src} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
