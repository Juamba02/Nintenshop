import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";
import styles from "../styles/ItemDetail.styles.js";
import ItemCount from "./ItemCount.js";
import Cart from "./Cart.js"

const ItemDetail = ({ product }) => {
  const [isHoveringHome, setIsHoveringHome] = useState(false);
  const [isHoveringCat, setIsHoveringCat] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isHoveringGTC, setIsHoveringGTC] = useState(false);

  const {addProduct} = useContext(CartContext)

  const handlerHoverInHome = (e) => {
    setIsHoveringHome(true);
  };

  const handlerHoverOutHome = (e) => {
    setIsHoveringHome(false);
  };

  const handlerHoverInCat = (e) => {
    setIsHoveringCat(true);
  };

  const handlerHoverOutCat = (e) => {
    setIsHoveringCat(false);
  };

  const onAdd = (quantity) => {
    setIsAdded(true);
    addProduct(product, quantity);
  };

  const returnItemCount = () => {
    setIsAdded(false);
  }

  const handlerHoverInGTC = (e) => {
    setIsHoveringGTC(true);
  };

  const handlerHoverOutGTC = (e) => {
    setIsHoveringGTC(false);
  };

  return (
    <>
      <div style={styles.imgContainer}>
        <div style={styles.map}>
          <Link
            to={"/"}
            style={isHoveringHome ? styles.linkActive : styles.linkInactive}
            onMouseEnter={handlerHoverInHome}
            onMouseLeave={handlerHoverOutHome}
          >
            <span>Home</span>
          </Link>
          <span> &gt; </span>
          <Link
            to={`/category/${product.category}`}
            style={isHoveringCat ? styles.linkActive : styles.linkInactive}
            onMouseEnter={handlerHoverInCat}
            onMouseLeave={handlerHoverOutCat}
          >
            <span>{product.category}</span>
          </Link>
          <span> &gt; </span>
          <span style={styles.active}>{product.name}</span>
        </div>

        <img src={product.img} style={styles.img} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{product.name}</h2>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.desc}>{product.desc}</p>
        <p style={styles.price}>${product.price}</p>
        {isAdded ? (
          <Link to={"/cart"} element={<Cart />}>
            <button
              style={
                isHoveringGTC
                  ? styles.addToCartActive
                  : styles.addToCartInactive
              }
              onMouseEnter={handlerHoverInGTC}
              onMouseLeave={handlerHoverOutGTC}
              onClick={returnItemCount}
            >
              Go to cart
            </button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ItemDetail;
