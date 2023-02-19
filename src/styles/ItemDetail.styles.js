const styles = {
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        margin: '2em'
    },
    img: {
        width: '100%'
    },
    textContainer: {
        width: '40%',
        margin: '2em 2em 2em 0'
    },
    map: {
        color: 'grey',
        marginBottom: '0.1em'
    },
    linkInactive: {
        textDecoration: 'none',
        color: 'grey',
        transition: '200ms ease-in-out'
    },
    linkActive: {
        textDecoration: 'none',
        color: 'red',
        transition: '200ms ease-in-out'
    },
    active: {
        fontWeight: 'bold',
        color: '#767676'
    },
    name: {
        borderBottom: '1px solid black',
        fontSize: '2em',
        marginBottom: '1em'
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '0.5em'
    },
    desc: {
        marginBottom: '1em'
    },
    price: {
        borderTop: '1px solid black',
        margin: '1em 0 0.8em',
        fontSize: '2em',
        fontWeight: '400',
    },
    buttonsContainer: {
        display: 'flex'
    },
    quantityContainer: {
        display: 'flex',
        width: '6em',
        height: '3em',
        border: '1px solid #c8c8c8',
        borderRadius: '3px',
        overflow: 'hidden',
        marginRight: '1em'
    },
    quantityButtonsInactive: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.5%',
        fontSize: '1.5em',
        backgroundColor: 'white',
        border: 'none',
        transition: '200ms ease-in-out'
    },
    quantityButtonsActive: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.5%',
        fontSize: '1.5em',
        backgroundColor: '#D3D3D3',
        border: 'none',
        transition: '200ms ease-in-out',
        cursor: 'pointer'
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        fontSize: '1.5em'
    },
    addToCartInactive: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5em',
        fontSize: '1.3em',
        borderRadius: '3px',
        width: '40%',
        transition: '200ms ease-in-out'
    },
    addToCartActive: {
        backgroundColor: '#D60000',
        color: 'white',
        border: 'none',
        padding: '0.5em',
        fontSize: '1.3em',
        borderRadius: '3px',
        width: '40%',
        transition: '200ms ease-in-out',
        cursor: 'pointer'
    }
}

export default styles