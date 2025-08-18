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
        <li><a href="#hotel">El Hotel</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#habitaciones">Habitaciones</a></li>
        <li><a href="#ubicacion">Ubicación</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#promociones">Promociones</a></li>
        <li><Link to="/lugares">Lugares de interés</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







