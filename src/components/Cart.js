import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => {
        return (
          <>
            <img src={require(`../img/${product.img}`)}/>
            <h1 key={product.id}>{product.name}</h1>
            <p>x{product.quantity}</p>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
