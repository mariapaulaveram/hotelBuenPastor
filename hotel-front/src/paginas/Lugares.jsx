import styles from "../styles/Lugares.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LugarItem from "../componentes/lugares/LugarItem";

const Lugares = () => {
    const [loading, setLoading] = useState(false);
    const [lugares, setLugares] = useState([]);

    useEffect(() => {
        const cargarLugares = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3000/api/lugares");
                setLugares(response.data);
            } catch (error) {
                console.error("Error al cargar lugares:", error);
            } finally {
                setLoading(false);
            }
        };
        cargarLugares();
    }, []);

    return (
        <section className={styles.holder}>
            <div className={styles.tituloWrapper}>
                <h2 className={styles.tituloInstitucional}>Lugares de Interés</h2>
                <div className={styles.bandaDecorativa}></div>
            </div>
            {loading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <div className={styles.flexContainer}>
                    {lugares.map((item) => (
                        <LugarItem
                            key={item.id}
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            body={item.cuerpo}
                        />
                    ))}
                </div>
            )}
        </section>
    );

};

export default Lugares;
