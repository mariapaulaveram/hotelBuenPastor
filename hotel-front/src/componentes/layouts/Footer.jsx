import styles from "../../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.navigation}>
                    <h5>El Hotel</h5>
                    <ul>
                        <li><a href="#hotel">Inicio</a></li>
                        <li><a href="#galeria">Galería</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#habitaciones">Habitaciones</a></li>
                        <li><a href="#ubicacion">Ubicación</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#promociones">Promociones</a></li>
                        <li><a href="#interes">Lugares de interés</a></li>
                    </ul>
                </div>

                <div className={styles.contactInfo}>
                    <h5>Contacto</h5>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>{' '}
                        San Lorenzo 110, Córdoba, Argentina
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>{' '}
                        reservas@hotelbuenpastor.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>{' '}
                        +54 351 469 8390
                    </p>
                </div>


                <div className={styles.social}>
                    <h5>Seguinos</h5>
                    <ul className={styles.socialIcons}>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <p>Hotel Buen Pastor – © 2025 María Paula Vera Morandini — Licencia MIT</p>
            </div>
        </footer>
    );
};

export default Footer;

