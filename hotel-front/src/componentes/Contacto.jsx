import styles from '../styles/Contacto.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Contacto = () => {   
    const initialForm = { 
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    // Actualiza el estado del formulario en tiempo real según el campo modificado
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((oldData) => ({
            ...oldData,
            [name]: value,
        }));
    };

    // Envía los datos del formulario al backend y gestiona la respuesta
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setSending(true);

        try {
            const response = await axios.post("http://localhost:3000/api/contacto", formData);
            setSending(false);
            setMsg(response.data.message);

            if (response.data.error === false) {
                setFormData(initialForm);
            }
        } catch (error) {
            setSending(false);
            setMsg("Error al enviar el mensaje");
        }
    };

    // Oculta automáticamente el mensaje después de cierto tiempo
    useEffect(() => {
        if (msg) {
            const tiempo = msg === "Error al enviar el mensaje" ? 3000 : 1000;
            const timer = setTimeout(() => {
                setMsg("");
            }, tiempo);

            return () => clearTimeout(timer); // limpieza si el componente se desmonta o el msg cambia
        }
    }, [msg]);

    return (
        <div className={styles.holder}>
            <div className={styles.contacto}>
                <div className={styles.columnaIzquierda}>
                    <div className={styles.form}>
                        <form className={styles.formulario} onSubmit={handleSubmit}>
                            <p>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder='Nombre'
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    placeholder='Apellido'
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='E-mail'
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder='Telefono'
                                />
                            </p>
                            <p>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder='Escribe tu mensaje...'
                                ></textarea>
                            </p>
                            {sending && <p className={styles.estado}>Enviando...</p>}
                            {msg && <p className={styles.estado}>{msg}</p>}
                            <div className={styles.botonWrapper}>
                                <input type="submit" value="Enviar" className={styles.boton} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles.columnaDerecha}>
                    <h2 className={styles.titulo}>Contacto</h2>
                    <div className={styles.datosContacto}>
                        <p>Dirección:</p>
                        <p><strong>San Lorenzo 110, Córdoba, Argentina</strong></p>
                        <p>Email:</p>
                        <p><strong>buenpastorhotel@gmail.com</strong></p>
                        <p>Teléfono:</p>
                        <p><strong>+54 351 469 8390</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
