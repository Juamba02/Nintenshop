import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Item.styles";

const Item = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHoverIn = (e) => {
    setIsHovering(true);
  };

  const handleHoverOut = (e) => {
    setIsHovering(false);
  };

  return (
    <div style={styles.tarjetas}>
      <div style={styles.imgTarjetas}>
        <img
          src={product.img}
          style={styles.fotoTarjetas}
        />
      </div>
      <div style={styles.textoTarjetas}>
        <span>{product.category}</span>
        <h3 style={styles.nombre}>{product.name}</h3>
        <div style={styles.parteInferior}>
          <p style={styles.precio}>${product.price}</p>
        </div>
      </div>
      <Link to={`/item/${product.id}`} style={styles.link}>
        <button
          style={isHovering ? styles.botonActive : styles.botonInactive}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          See More
        </button>
      </Link>
    </div>
  );
};

export default Item;
