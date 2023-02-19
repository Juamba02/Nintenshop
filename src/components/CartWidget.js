import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../styles/CartWidget.styles.js';
import { Link } from "react-router-dom";

const ShoppingCart = () =>{
    return(
        <div style={styles.divSC}>
            <Link to='/cart'><ShoppingCartIcon fontSize="large" style={styles.shoppingCart}/></Link>
            <div style={styles.divSCNumber}>
                <p style={styles.sCNumber}>3</p>
            </div>
        </div>
    )
}

export default ShoppingCart;