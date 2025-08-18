import styles from '../styles/Servicios.module.css';
import { FaWifi, FaLock, FaCar, FaTv, FaSnowflake, FaCoffee } from 'react-icons/fa';
import { MdKitchen, MdLuggage } from 'react-icons/md';

const servicios = [
    { icon: <FaWifi />, label: "WiFi" },
    { icon: <MdLuggage />, label: "Guarda de equipaje" },
    { icon: <FaLock />, label: "Caja de seguridad" },
    { icon: <MdKitchen />, label: "Frigobar" },
    { icon: <FaCar />, label: "Estacionamiento" },
    { icon: <FaTv />, label: "TV LED" },
    { icon: <FaSnowflake />, label: "Aire acondicionado" },
    { icon: <FaCoffee />, label: "Desayuno" },
];

function Servicios() {
    return (
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Nuestros Servicios</h2>
            <div className={styles.servicios}>
            <div className={styles.overlay}>
                <div className={styles.grid}>
                    {servicios.map((s, i) => (
                        <div key={i} className={styles.item}>
                            <span className={styles.icon}>{s.icon}</span>
                            <p>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}


export default Servicios;





