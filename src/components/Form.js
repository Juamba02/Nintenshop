import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/hover.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Form = ({ handlerClickOff }) => {
  const [isHoveringConfirm, setIsHoveringConfirm] = useState(false);
  const [isHoveringBack, setIsHoveringBack] = useState(false);
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);
  const [data, setData] = useState({});

  const { cart, total, clearCart } = useContext(CartContext);

  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlerClick = (e) => {
    e.preventDefault()
    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      data,
      items: cart,
      total,
      time: serverTimestamp(),
    });
    setIsPurchaseConfirmed(true);
  };

  const handlerStock = (cart) => {
    let auxCart = [];
    cart.forEach(element => {
      auxCart.push({id: element.id, quantity: element.quantity})
    });
    console.log(auxCart);
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

  return (<>
      <div style={isPurchaseConfirmed ? styles.modalActive : styles.modalInactive}>

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
              onChange={() => handlerStock(cart)}
              required
            />
          </div>
          <button
            type="submit"
            onMouseEnter={handlerHoverInConfirm}
            onMouseLeave={handlerHoverOutConfirm}
            // onSubmit={handlerClick}
            style={
              isHoveringConfirm ? styles.confirmActive : styles.confirmInactive
            }
          >
            Confirm
          </button>
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

const styles = {
  formDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "80vh",
    backgroundColor: "white",
    padding: "3em",
    borderRadius: "3px",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "35%",
    alignItems: "center",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    height: "2em",
    marginBottom: "1em",
  },
  confirmInactive: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    marginBottom: "1em",
    width: "30%",
  },
  confirmActive: {
    backgroundColor: "#D60000",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    cursor: "pointer",
    marginBottom: "1em",
    width: "30%",
  },
  cancel: {
    background: "none",
    border: "none",
    color: "grey",
    textDecoration: "underline",
  },
  modalInactive: {
    display: "none"
  },
  modalActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.211)',
    position: 'fixed',
    height: '80vh'
  },
  backInactive: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    marginBottom: "1em",
    width: "100%",
  },
  backActive: {
    backgroundColor: "#D60000",
    color: "white",
    border: "none",
    padding: "0.5em",
    fontSize: "1.3em",
    borderRadius: "3px",
    transition: "200ms ease-in-out",
    cursor: "pointer",
    marginBottom: "1em",
    width: "100%",
  },
};

export default Form;
