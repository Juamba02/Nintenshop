import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    !cart.length ? (
    <div style={styles.container}>
      <h1>
        Oops! It seems like your cart is empty, to check out our products
        click{" "}
        <Link to={"/"} style={styles.link}>
          here
        </Link>
      </h1>
    </div>
  ) : (
    <div style={styles.container}>
      {cart.map((product) => {
        return (
          <div>
            <img src={product.img} />
            <h1 key={product.id}>{product.name}</h1>
            <p>x{product.quantity}</p>
          </div>
        );
      })}
    </div>
  ));
};

export default Cart;

const styles = {
  container: {
    minHeight: "80vh",
  },
  link: {
    textDecoration: "none",
    color: "red",
  },
};
