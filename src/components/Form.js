import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/hover.css";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import styles from "../styles/Form.styles";

const Form = ({ handlerClickOff }) => {
  const [isHoveringConfirm, setIsHoveringConfirm] = useState(false);
  const [isHoveringBack, setIsHoveringBack] = useState(false);
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState([]);
  const [buyerData, setBuyerData] = useState({});

  const { cart, total, clearCart } = useContext(CartContext);

  const updateData = (e) => {
    setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setIsPurchaseConfirmed(true);
    handlerStock(cart);
  };

  const handlerStock = (items) => {
    let auxCart = [];
    const errorCart = [];
    items.forEach((element) => {
      auxCart.push({ id: element.id, quantity: element.quantity });
    });
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((data) => {
      const products = data.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      let newCart = arrayComparation(products, auxCart);
      for (let i = 0; i < newCart.length; i++) {
        const tempObj = newCart[i];
        if (tempObj.quantity > tempObj.stock) {
          errorCart.push({
            name: tempObj.name,
            id: tempObj.id,
            stock: tempObj.stock,
          });
        }
      }
      if (errorCart.length > 0) {
        setErrorData(errorCart);
        setError(true);
      } else {
        cart.forEach((product) => {
          const docReference = doc(db, "products", product.id);
          updateDoc(docReference, { stock: product.stock - product.quantity });
        });
        const sellCollection = collection(db, "sells");
        addDoc(sellCollection, {
          buyer: buyerData,
          items: cart,
          total,
          time: serverTimestamp(),
        });
      }
    });
    //  if(error === false){
    //
    // }
  };

  const arrayComparation = (source, target) => {
    let newCart = [];
    for (let i = 0; i < source.length; i++) {
      const srcObj = source[i];
      for (let j = 0; j < target.length; j++) {
        const tarObj = target[j];
        if (srcObj.id === tarObj.id) {
          newCart.push({
            id: srcObj.id,
            name: srcObj.name,
            quantity: tarObj.quantity,
            stock: srcObj.stock,
          });
        }
      }
    }
    return newCart;
  };

  const handlerHoverInConfirm = (e) => {
    setIsHoveringConfirm(true);
  };

  const handlerHoverOutConfirm = (e) => {
    setIsHoveringConfirm(false);
  };

  const handlerHoverInBack = (e) => {
    setIsHoveringBack(true);
  };

  const handlerHoverOutBack = (e) => {
    setIsHoveringBack(false);
  };

  const handlerClickBack = () => {
    clearCart();
    setError(false);
    setErrorData([]);
    setIsPurchaseConfirmed(false);
  };

  return (
    <>
      <div
        style={isPurchaseConfirmed ? styles.modalActive : styles.modalInactive}
      >
        {error ? (
          <div style={styles.modal}>
            <h3>There was an error with your order!</h3>
            <h4>We have insufficient stock for the following items:</h4>
            <ul>
              {errorData.map((product) => {
                return (
                  <li key={product.id}>
                    {product.name} (Available stock: {product.stock})
                  </li>
                );
              })}
            </ul>
            <Link to={"/"}>
              <button
                onMouseEnter={handlerHoverInBack}
                onMouseLeave={handlerHoverOutBack}
                onClick={handlerClickBack}
                style={isHoveringBack ? styles.backActive : styles.backInactive}
              >
                Back to homepage
              </button>
            </Link>
          </div>
        ) : (
          <div style={styles.modal}>
            <h3>Thank you for your purchase!</h3>
            <p>
              You will receive an email with the shipment tracking information.
            </p>
            <Link to={'/'}>
              <button
                onMouseEnter={handlerHoverInBack}
                onMouseLeave={handlerHoverOutBack}
                onClick={handlerClickBack}
                style={isHoveringBack ? styles.backActive : styles.backInactive}
              >
                Back to Homepage
              </button>
            </Link>
          </div>
        )}
      </div>
      <div style={styles.formDiv}>
        <p>Fill with your information:</p>

        <form onSubmit={handlerClick} style={styles.form}>
          <div style={styles.inputDiv}>
            <label htmlFor="name">Name:</label>
            <input
              style={styles.input}
              id="name"
              name="Name"
              onChange={updateData}
              required
            />
            <label htmlFor="lastName">Last name:</label>
            <input
              style={styles.input}
              id="lastName"
              name="Last Name"
              onChange={updateData}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              style={styles.input}
              id="email"
              name="Email"
              type="email"
              onChange={updateData}
              required
            />
            <label htmlFor="country">Country:</label>
            <input
              style={styles.input}
              id="country"
              name="Country"
              onChange={updateData}
              required
            />
            <label htmlFor="state">State/Province:</label>
            <input
              style={styles.input}
              id="state"
              name="State/Province"
              onChange={updateData}
              required
            />
            <label htmlFor="city">City:</label>
            <input
              style={styles.input}
              id="city"
              name="City"
              onChange={updateData}
              required
            />
            <label htmlFor="address">Address:</label>
            <input
              style={styles.input}
              id="address"
              name="Address"
              onChange={updateData}
              required
            />
            <label htmlFor="Zip">ZIP Code:</label>
            <input
              style={styles.input}
              id="Zip"
              name="ZIP Code"
              onChange={updateData}
              required
            />
            <label htmlFor="number">Credit card number:</label>
            <input
              style={styles.input}
              id="number"
              name="Credit card number"
              minLength={16}
              maxLength={16}
              onChange={updateData}
              required
            />
            <label htmlFor="noc">Name on card:</label>
            <input
              style={styles.input}
              id="noc"
              name="Name on card"
              onChange={updateData}
              required
            />
            <label htmlFor="expires">Expires:</label>
            <input
              style={styles.input}
              id="expires"
              name="Expires"
              type="month"
              onChange={updateData}
              required
            />
            <label htmlFor="cvc">CVC:</label>
            <input
              style={styles.input}
              id="cvc"
              name="Security code"
              type="password"
              minLength={3}
              maxLength={3}
              onChange={updateData}
              required
            />
          </div>
          <input
            type="submit"
            onMouseEnter={handlerHoverInConfirm}
            onMouseLeave={handlerHoverOutConfirm}
            value="Confirm"
            style={
              isHoveringConfirm ? styles.confirmActive : styles.confirmInactive
            }
          />
          <button
            style={styles.cancel}
            className="button"
            onClick={handlerClickOff}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
