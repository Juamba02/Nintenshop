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

  const add1Product = (product) => {
    if(product.quantity < product.stock){
      product.quantity = product.quantity + 1;
      setQty(qty + 1);
    }
  };

  const sub1Product = (product) => {
    if(product.quantity > 1){
      product.quantity = product.quantity - 1;
      setQty(qty - 1);
    }
  };

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      const auxCart = [...cart];
      for (const auxProduct of auxCart) {
        if (auxProduct.id === product.id) {
          auxProduct.quantity = auxProduct.quantity + quantity;
        }
      }
      setCart(auxCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
      setQty(qty + quantity);
    }
  };

  const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clearCart = () => {
    setCart([]);
    setQty(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, qty, add1Product, sub1Product, addProduct, removeProduct, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
