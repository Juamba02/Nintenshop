import React, { useState } from "react";
import styles from "../styles/ItemDetail.styles.js";

const ItemCount = ({stock, onAdd}) => {
  const [isHoveringSub, setIsHoveringSub] = useState(false);
  const [isHoveringAdd, setIsHoveringAdd] = useState(false);
  const [isHoveringATC, setIsHoveringATC] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handlerHoverInSub = (e) => {
    setIsHoveringSub(true);
  };

  const handlerHoverOutSub = (e) => {
    setIsHoveringSub(false);
  };

  const handlerHoverInAdd = (e) => {
    setIsHoveringAdd(true);
  };

  const handlerHoverOutAdd = (e) => {
    setIsHoveringAdd(false);
  };

  const handlerAdd = (e) => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const handlerSub = (e) => {
    quantity !== 1 && setQuantity(quantity - 1);
  };

  const handlerHoverInATC = (e) => {
    setIsHoveringATC(true);
  };

  const handlerHoverOutATC = (e) => {
    setIsHoveringATC(false);
  };

  return (
    <>
      <div style={styles.buttonsContainer}>
        <div style={styles.quantityContainer}>
          <button
            style={
              isHoveringSub
                ? styles.quantityButtonsActive
                : styles.quantityButtonsInactive
            }
            onMouseEnter={handlerHoverInSub}
            onMouseLeave={handlerHoverOutSub}
            onClick={handlerSub}
          >
            -
          </button>
          <span style={styles.quantity}>{quantity}</span>
          <button
            style={
              isHoveringAdd
                ? styles.quantityButtonsActive
                : styles.quantityButtonsInactive
            }
            onMouseEnter={handlerHoverInAdd}
            onMouseLeave={handlerHoverOutAdd}
            onClick={handlerAdd}
          >
            +
          </button>
        </div>
        <button
          style={
            isHoveringATC ? styles.addToCartActive : styles.addToCartInactive
          }
          onMouseEnter={handlerHoverInATC}
          onMouseLeave={handlerHoverOutATC}
          onClick={() => onAdd(quantity)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
