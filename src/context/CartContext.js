import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let qtyInitial = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
    });
    setQty(qtyInitial);
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
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, qty, addProduct, removeProduct, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
