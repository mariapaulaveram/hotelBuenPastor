
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Nav.module.css";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header"); // más seguro que getElementById

    const handleScroll = () => {
      if (header) {
        const headerHeight = header.offsetHeight;
        setSticky(window.scrollY > headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${sticky ? styles.fixed : ""}`}>
      <ul className={styles.links}>
        <li><Link to="/#hotel">El Hotel</Link></li>
        <li><Link to="/#galeria">Galería</Link></li>
        <li><Link to="/#servicios">Servicios</Link></li>
        <li><Link to="/#habitaciones">Habitaciones</Link></li>
        <li><Link to="/#ubicacion">Ubicación</Link></li>
        <li><Link to="/#contacto">Contacto</Link></li>
        <li><Link to="/#promociones">Promociones</Link></li>
        <li><Link to="/lugares">Lugares de interés</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







