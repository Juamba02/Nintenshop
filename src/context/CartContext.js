import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let firstQty = 0;
    cart.forEach((product) => {
      firstQty += product.quantity;
    });
    setQty(firstQty);
  }, [cart]);

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      const auxCart = [...cart];
      for(const auxProduct of auxCart){
        if(auxProduct.id === product.id){
          auxProduct.quantity = auxProduct.quantity + quantity;
        }
      }
      setCart(auxCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
      setQty(qty + quantity);
    }
  };

  const removeProduct = (id) => {
    const product = cart.find((product) => product.id === id);
    setCart(cart.filter((product) => product.id !== id));
    setQty(qty - product.quantity);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clearCart = () => {
    setCart([]);
    setQty(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, qty, addProduct, removeProduct, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
