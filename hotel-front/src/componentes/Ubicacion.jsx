import styles from '../styles/Ubicacion.module.css';

const Ubicacion = () => {
  return (
    <section className={styles.ubicacion}>
      <div className={styles.texto}>
        <h2>Ubicación</h2>
        <p>
          El Hotel Buen Pastor se encuentra en la zona más consolidada de la capital cordobesa, colindante a la Iglesia del Sagrado Corazón de Jesús, conocida como “Los Capuchinos”. Este templo neogótico, inaugurado en 1930, se integra perfectamente al paisaje señorial de Nueva Córdoba.
        </p>
        <p>
          Ubicado en San Lorenzo 110 esquina Buenos Aires, el hotel está rodeado de exclusivas opciones gastronómicas, comerciales y culturales. Su cercanía con avenidas principales como Hipólito Yrigoyen, Vélez Sarsfield, Boulevar San Juan y Chacabuco lo posiciona en un lugar estratégico, con acceso privilegiado a los principales puntos urbanos.
        </p>
      </div>

      <div className={styles.mapaContainer}>
        <iframe
          title="Mapa Hotel Buen Pastor"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.002134812768!2d-64.18823472442815!3d-31.42396477426379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2e3e1e6c7a1%3A0x2f6f9b3b8e5e6f4!2sHotel%20Buen%20Pastor!5e0!3m2!1ses!2sar!4v1692212345678"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Ubicacion;

