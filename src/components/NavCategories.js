import React from "react";
import styles from "../styles/Navbar.styles";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { name: "Games", id: "1", route: "/category/Games" },
    { name: "Consoles", id: "2", route: "/category/Consoles" },
    { name: "amiibo", id: "3", route: "/category/amiibo" },
  ];

  return (
    <nav style={styles.nav}>
      {categories.map((category) => {
        return (
          <NavLink key={category.id} style={styles.botones} to={category.route}>
            {category.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavCategories;
