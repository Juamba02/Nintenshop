import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/hover.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Form = ({ handleClickOff }) => {
  const [isHoveringConfirm, setIsHoveringConfirm] = useState(false);
  const [data, setData] = useState({});
  const { cart, total } = useContext(CartContext);

  const updateData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
    console.log(data);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    const sellCollection = collection(db, 'sells');
    addDoc(sellCollection, {
        data,
        items: cart,
        total
    })
  }

  const handleHoverInConfirm = (e) => {
    setIsHoveringConfirm(true);
  };

  const handleHoverOutConfirm = (e) => {
    setIsHoveringConfirm(false);
  };

  return (
    <div style={styles.formDiv}>
      <p>Fill with your payment information:</p>
      <form action="" style={styles.form}>
        <div style={styles.inputDiv}>
          <label>Name:</label>
          <input style={styles.input} name="Name" onChange={updateData} required />
          <label>Last name:</label>
          <input style={styles.input} name="Last Name" onChange={updateData} required />
          <label>Email:</label>
          <input style={styles.input} name="Email" type="email" onChange={updateData} required />
          <label>Address:</label>
          <input style={styles.input} name="Address" onChange={updateData} required />
          <label>ZIP Code:</label>
          <input style={styles.input} name="ZIP Code" onChange={updateData} required />
          <label>Credit card number:</label>
          <input style={styles.input} name="Credit card number" maxLength="19" onChange={updateData} required />
          <label>Name in card:</label>
          <input style={styles.input} name="Name in card" onChange={updateData} required />
          <label>Expires:</label>
          <input style={styles.input} name="Expires" type="month" onChange={updateData} required />
          <label>Security code:</label>
          <input style={styles.input} name="Security code" onChange={updateData} required />
          </div>
          <button
            onMouseEnter={handleHoverInConfirm}
            onMouseLeave={handleHoverOutConfirm}
            onClick={handleClick}
            style={
              isHoveringConfirm ? styles.confirmActive : styles.confirmInactive
            }
          >
            Confirm
          </button>
          <button style={styles.cancel} className="button" onClick={handleClickOff}>
            Cancel
          </button>
        
      </form>
    </div>
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
    width: "30%",
    alignItems: 'center'
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    width: '100%'
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
};

export default Form;
