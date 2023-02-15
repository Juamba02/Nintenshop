import React from "react";

const Item = ({product}) => {
    return(
        <div style={styles.tarjetas}>
            <div>
            <img src={require(`../img/${product.img}`)} style={styles.imgTarjetas}/>
            <h3>{product.name}</h3>
            </div>
            
            <div style={styles.textoTarjetas}>
                
                <p>{product.desc}</p>
            </div>
            <b>U$D {product.price}</b>
        </div>
    )
}

const styles = {
    tarjetas: {
        height: '18em',
        width: '14%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px lightgrey solid',
        borderRadius: '7px',
        marginTop: '2em',
        marginBottom: '1em',
        textAlign: 'center',
        overflow: 'hidden',
        margin: '10px 20px'
    },
    imgTarjetas: {
        height: '121px',
        width: "100%",
        marginBottom: '10px'
    },
    textoTarjetas: {
        marginInline: '0.4em',
        display: 'flex',
        flexDirection: 'column'
    }
}

export default Item;