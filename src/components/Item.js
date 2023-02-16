import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return(
        
            <div style={styles.tarjetas}>
                <Link to={`/product/${product.id}`} style={styles.imgTarjetas}>
                    <img src={require(`../img/${product.img}`)} style={styles.fotoTarjetas}/>
                </Link>
                <div style={styles.textoTarjetas}>
                    <span >{product.category}</span>
                    <h3 style={styles.nombre}>{product.name}</h3>
                    <div style={styles.parteInferior}>
                        <p>U$D {product.price}</p>
                    </div>
                </div>
            </div>
        
    )
}

const styles = {
    tarjetas: {
        width: "270px",
        position: "relative",
        boxShadow: "0 2px 7px #dfdfdf",
        margin: "50px auto",
        background: "#fafafa"
    },
    imgTarjetas: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        background: '#f0f0f0'
    },
    fotoTarjetas: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    category: {
        display: 'block',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#ccc',
    marginBottom: '18px'
    },
    textoTarjetas: {
        padding: '30px'
    },
    nombre: {
        fontWeight: '500',
        display: 'block',
        marginBottom: '18px',
        textTransform: 'uppercase',
        color: '#363636'
    },
    parteInferior: {
        overflow: 'hidden',
        borderTop: '1px solid #eee',
        paddingTop: '20px'
    },
    precio: {
        fontSize: '18px',
        fontWeight: '600'
        }
}

export default Item;