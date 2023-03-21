import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import "../styles/hover.css";
import Form from "./Form";

const Cart = () => {
  const { cart, removeProduct, add1Product, sub1Product, total, clearCart } =
    useContext(CartContext);

  const [isHoveringCheckout, setIsHoveringCheckout] = useState(false);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleHoverInCheckout = (e) => {
    setIsHoveringCheckout(true);
  };

  const handleHoverOutCheckout = (e) => {
    setIsHoveringCheckout(false);
  };

  const handleClick = (e) => {
    setIsCheckoutClicked(true);
    setIsHoveringCheckout(false);
  };

  const handleClickOff = (e) => {
    setIsCheckoutClicked(false);
  };

  return !cart.length ? (
    <div style={styles.container}>
      <h1>
        Oops! It seems like your cart is empty, to check out our products click{" "}
        <Link to={"/"} style={styles.link}>
          here
        </Link>
      </h1>
    </div>
  ) : isCheckoutClicked ? (
    <Form handleClickOff={handleClickOff} />
  ) : (
    <>
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
              <p style={styles.price}>
                ${(product.price * product.quantity).toFixed(2)}
              </p>
              <DeleteSharpIcon
                className="button"
                onClick={() => removeProduct(product.id)}
              />
            </div>
          );
        })}
        <p style={styles.total}>Total: ${total.toFixed(2)}</p>
        <button
          onMouseEnter={handleHoverInCheckout}
          onMouseLeave={handleHoverOutCheckout}
          onClick={handleClick}
          style={
            isHoveringCheckout ? styles.checkoutActive : styles.checkoutInactive
          }
        >
          Proceed to Checkout
        </button>
        <button onClick={clearCart} style={styles.clearCart} className="button">
          Clear cart
        </button>
      </div>
    </>
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
    width: "25%",
  },
  qtyDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "12%",
  },
  qty: {
    fontSize: "1.2em",
    lineHeight: "20px",
  },
  price: {
    width: "10%",
  },
  total: {
    fontSize: "2em",
    marginBottom: "1em",
  },
  checkoutInactive: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    marginBottom: "1em",
  },
  checkoutActive: {
    backgroundColor: "#D60000",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    cursor: "pointer",
    marginBottom: "1em",
  },
  clearCart: {
    background: "none",
    border: "none",
    color: "red",
    textDecoration: "underline",
  },
};
