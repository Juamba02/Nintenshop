import React from "react";
import logo from "../logoNintenshop.png";
import styles from "./Navbar.styles";
import ShoppingCart from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import NavCategories from "./NavCategories";


const Navbar = () => {
    return (
        <header style={styles.navbar}>
            <Link to='/' style={styles.logo}><img src={logo} style={styles.logo} alt='Shop logo' /></Link>
            <NavCategories/>
            <ShoppingCart/>
        </header>
    )
}



export default Navbar;