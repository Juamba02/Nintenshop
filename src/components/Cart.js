import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import "../styles/hover.css";
import Form from "./Form";
import styles from "../styles/Cart.styles";

const Cart = () => {
  const { cart, removeProduct, add1Product, sub1Product, total, clearCart } =
    useContext(CartContext);

  const [isHoveringCheckout, setIsHoveringCheckout] = useState(false);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handlerHoverInCheckout = (e) => {
    setIsHoveringCheckout(true);
  };

  const handlerHoverOutCheckout = (e) => {
    setIsHoveringCheckout(false);
  };

  const handlerClick = (e) => {
    setIsCheckoutClicked(true);
    setIsHoveringCheckout(false);
  };

  const handlerClickOff = (e) => {
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
    <Form
      handlerClickOff={handlerClickOff}
    />
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
          onMouseEnter={handlerHoverInCheckout}
          onMouseLeave={handlerHoverOutCheckout}
          onClick={handlerClick}
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