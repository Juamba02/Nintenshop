import React from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <p style={styles.greeting}>{greeting}</p>
    )
}

const styles = {
    greeting: {
        fontSize: '2em',
        marginTop: '1em'
    }
}

export default ItemListContainer;