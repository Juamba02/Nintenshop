import React, { useState } from "react";
import styles from "../styles/ItemDetail.styles.js";

const ItemCount = ({stock, onAdd}) => {
  const [isHoveringSub, setIsHoveringSub] = useState(false);
  const [isHoveringAdd, setIsHoveringAdd] = useState(false);
  const [isHoveringATC, setIsHoveringATC] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleHoverInSub = (e) => {
    setIsHoveringSub(true);
  };

  const handleHoverOutSub = (e) => {
    setIsHoveringSub(false);
  };

  const handleHoverInAdd = (e) => {
    setIsHoveringAdd(true);
  };

  const handleHoverOutAdd = (e) => {
    setIsHoveringAdd(false);
  };

  const handleAdd = (e) => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const handleSub = (e) => {
    quantity !== 1 && setQuantity(quantity - 1);
  };

  const handleHoverInATC = (e) => {
    setIsHoveringATC(true);
  };

  const handleHoverOutATC = (e) => {
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
            onMouseEnter={handleHoverInSub}
            onMouseLeave={handleHoverOutSub}
            onClick={handleSub}
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
            onMouseEnter={handleHoverInAdd}
            onMouseLeave={handleHoverOutAdd}
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <button
          style={
            isHoveringATC ? styles.addToCartActive : styles.addToCartInactive
          }
          onMouseEnter={handleHoverInATC}
          onMouseLeave={handleHoverOutATC}
          onClick={() => onAdd(quantity)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
