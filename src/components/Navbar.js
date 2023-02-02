import React from "react";
import logo from "../logoNintenshop.png";
import styles from "./Navbar.styles";
import ShoppingCart from "./CartWidget";


const Navbar = () => {
    return (
        <header style={styles.navbar}>
            <img src={logo} style={styles.logo} alt='Shop logo' />
                <nav>
                    <ul style={styles.lista}>
                        <li><a href="" style={styles.botones}>Inicio</a></li>
                        <li><a href="" style={styles.botones}>Productos</a></li>
                        <li><a href="" style={styles.botones}>Contáctanos</a></li>
                    </ul>
                </nav>
                <ShoppingCart/>
        </header>
    )
}



export default Navbar;