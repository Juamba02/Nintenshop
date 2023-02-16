import React from "react";
import styles from "./Navbar.styles";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
    const categories = [
        {name: 'Games', id: '1', route: '/categories/Games'},
        {name: 'Consoles', id: '2', route: '/categories/Consoles'},
        {name: 'amiibo', id: '3', route: '/categories/amiibo'}
    ];

    return(
        <nav style={styles.nav}>
        {categories.map((category) => {
            return(
                
                    <NavLink key={category.id} style={styles.botones} to={category.route}>
                        {category.name}
                    </NavLink>
                
            )
        })}
        </nav>
    )
}

export default NavCategories;