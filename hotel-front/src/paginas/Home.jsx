import styles from "../styles/Home.module.css";
import HomeCarousel from '../componentes/HomeCarousel';
import Galeria from "../componentes/Galeria";
import Servicios from "../componentes/Servicios";
import Ubicacion from '../componentes/Ubicacion';
import Contacto from "../componentes/Contacto";

const Home = () => {
  return (
    <main id="hotel">
      {/* Hero Section */}
       <HomeCarousel />
      <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Un espacio ideado a tu ritmo</h1>
        <button className={styles.cta}>Reservá tu estadía</button> /*se abre un formulario de reserva */
      </section>

      {/* Presentación */}
      <section className={styles.presentacion}>
        <p>
          Cuando elegís Hotel Buen Pastor Capuchinos, comenzás a disfrutar de un concepto de hotelería express único en la ciudad, ideado desde tu agenda y comodidad.
        </p>
        <p>
          A estrenar en el corazón de Córdoba, el hotel cuenta con todos los servicios para satisfacer tus actividades con tiempo a favor.
        </p>
        <p>
          Con una dinámica moderna, útil y segura, en sintonía con tu conectividad, descanso y tranquilidad.
        </p>
      </section>

        {/* Galeria */}
        <section className={styles.galeria} id="galeria">
          <Galeria />
        </section>

       {/* Estilo y confort */}
        <section className={styles.confort}>
          <h2>Confort urbano inspirado en tu agenda</h2>
        <p>
          Su distribución y estilo están proyectados en la simpleza y el minimalismo. Cuidando siempre la practicidad de tu estadía desde tu ingreso hasta el check out.
        </p>
        <p>
          Su diseño y estética son sobrios y útiles a tus horas de descanso, actividades, aseo y desayuno.
        </p>
       </section>

        {/* Servicios */}
        <section id="servicios" className={styles.serviciosSection}>
          <Servicios />
        </section>

      {/* Ubicación */}
      <section id="ubicacion">
        <Ubicacion/>
      </section>

      {/* Contacto */} {/* aca va un formulario*/}
      <section id="contacto" className={styles.contactoSection}>
        <Contacto/>
      </section>
      </div>
    </main>
  );
};

export default Home;
