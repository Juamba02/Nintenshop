import React from "react";

const Footer = () => {
    return(
        <div style={styles.footer}>
            <p style={styles.text}>©2023. Juan Bautista Aramberri</p>
        </div>
    )
}

const styles = {
    footer: {
        height: '10vh',
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white'
    }
}

export default Footer;