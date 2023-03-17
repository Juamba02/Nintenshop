import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import "../styles/hover.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);
  const { add1Product } = useContext(CartContext);
  const { sub1Product } = useContext(CartContext);

  return !cart.length ? (
    <div style={styles.container}>
      <h1>
        Oops! It seems like your cart is empty, to check out our products click{" "}
        <Link to={"/"} style={styles.link}>
          here
        </Link>
      </h1>
    </div>
  ) : (
    <div style={styles.container}>
      {cart.map((product) => {
        return (
          <div key={product.id} style={styles.productContainer}>
            <img src={product.img} style={styles.img} />
            <h1 style={styles.name}>{product.name}</h1>
            <div style={styles.qtyDiv}>
              <RemoveSharpIcon
                fontSize="small"
                className="button"
                onClick={() => sub1Product(product)}
              />
              <p style={styles.qty}>x{product.quantity}</p>
              <AddSharpIcon
                fontSize="small"
                className="button"
                onClick={() => add1Product(product)}
              />
            </div>
            <p style={styles.price}>${product.price * product.quantity}</p>
            <DeleteSharpIcon
              className="button"
              onClick={() => removeProduct(product.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "red",
  },
  productContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10vh",
    width: "50%",
    marginTop: "1em",
    borderBottom: "1px grey solid",
  },
  img: {
    height: "9vh",
  },
  name: {
    fontSize: "1em",
    width: '25%'
  },
  qtyDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "12%",
  },
  qty: {
    fontSize: "1.2em",
  },
  price: {
    width: '10%'
  }
};
