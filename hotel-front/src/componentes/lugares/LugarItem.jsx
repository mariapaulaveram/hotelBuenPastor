import styles from '../../styles/LugarItem.module.css';
import React from 'react';

const LugarItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className={styles.lugar}>
            <h1 className={styles.titulo}>{title}</h1>
            <hr className={styles.separador} />
            <h4 className={styles.subtitulo}>{subtitle}</h4>
            <img src={imagen} alt={title} className={styles.imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} className={styles.cuerpo} />
        </div>
    );
}
export default LugarItem;


