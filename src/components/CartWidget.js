import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './CartWidget.styles';

const ShoppingCart = () =>{
    return(
        <div style={styles.divSC}>
            <ShoppingCartIcon fontSize="large" style={styles.shoppingCart}/>
            <div style={styles.divSCNumber}>
                <p style={styles.sCNumber}>3</p>
            </div>
        </div>
    )
}

export default ShoppingCart;