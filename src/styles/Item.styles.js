const styles = {
    tarjetas: {
        width: "260px",
        position: "relative",
        boxShadow: "0 2px 7px #dfdfdf",
        margin: "50px auto",
        background: "#fafafa",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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
        padding: '20px',
        height: '12em',
        width: '90%'
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
        },
    botonInactive: {
        padding: '0.7em',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        transition: '200ms ease-in-out'
    },
    botonActive: {
        padding: '0.7em',
        backgroundColor: '#D60000',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: '200ms ease-in-out'
    },
    link: {
        marginBottom: '1em',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px'
    }
}

export default styles;