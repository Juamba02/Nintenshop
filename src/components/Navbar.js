import React, { useContext, useEffect, useState } from "react";
import logo from "../logoNintenshop.png";
import styles from "../styles/Navbar.styles";
import ShoppingCart from "./CartWidget";
import { Link } from "react-router-dom";
import NavCategories from "./NavCategories";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    if (cart.length) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cart]);

  return (
    <header style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <img src={logo} style={styles.logo} alt="Shop logo" />
      </Link>
      <NavCategories />
      <ShoppingCart isEmpty={isEmpty} />
    </header>
  );
};

export default Navbar;
