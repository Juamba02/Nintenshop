import React, { useState } from "react";
import styles from "../styles/Navbar.styles";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavCategories = () => {
  const [categories, setCategories] = useState([]);
  const categoriesDoc = collection(db, "categories");
  getDocs(categoriesDoc).then((data) => {
    const categoriesList = data.docs.map((category) => {
      return {
        ...category.data(),
        id: category.id
      };
    });
    setCategories(categoriesList)
  });

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
