import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../styles/CartWidget.styles.js";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";

const ShoppingCart = ({ isEmpty }) => {
  const { qty } = useContext(CartContext);
  return (
      <div style={styles.divSC}>
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large" style={styles.shoppingCart} />
        </Link>
        <div style={!isEmpty ? styles.divInactive : styles.divSCNumber}>
          <p style={styles.sCNumber}>{qty}</p>
        </div>
      </div>
  );
};

export default ShoppingCart;
