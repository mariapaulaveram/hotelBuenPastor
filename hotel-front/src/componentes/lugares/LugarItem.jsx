import { Link } from "react-router-dom";
import styles from "../../styles/LugarItem.module.css";


const LugarItem = ({ id, title, subtitle, imagen }) => {
  return (
    <Link to={`/lugares/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={imagen} alt={title} className={styles.imagen} />
        <div className={styles.texto}>
          <h3 className={styles.titulo}>{title}</h3>
          <p className={styles.subtitulo}>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default LugarItem;

