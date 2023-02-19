import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ItemDetail.styles.js";

const ItemDetail =  ({product}) => {
    const [isHoveringHome, setIsHoveringHome] = useState(false)
    const [isHoveringCat, setIsHoveringCat] = useState(false)
    const [isHoveringSub, setIsHoveringSub] = useState(false)
    const [isHoveringAdd, setIsHoveringAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [isHoveringATC, setIsHoveringATC] = useState(false)

    const handleHoverInHome = (e) => {
        setIsHoveringHome(true)
    }

    const handleHoverOutHome = (e) => {
        setIsHoveringHome(false)
    }

    const handleHoverInCat = (e) => {
        setIsHoveringCat(true)
    }

    const handleHoverOutCat = (e) => {
        setIsHoveringCat(false)
    }

    const handleHoverInSub = (e) => {
        setIsHoveringSub(true)
    }

    const handleHoverOutSub = (e) => {
        setIsHoveringSub(false)
    }

    const handleHoverInAdd = (e) => {
        setIsHoveringAdd(true)
    }

    const handleHoverOutAdd = (e) => {
        setIsHoveringAdd(false)
    }

    const handleAdd = (e) => {
        setQuantity(quantity + 1)
    }

    const handleSub = (e) => {
        quantity !== 1 && setQuantity(quantity - 1)
    }

    const handleHoverInATC = (e) => {
        setIsHoveringATC(true)
    }

    const handleHoverOutATC = (e) => {
        setIsHoveringATC(false)
    }
    
    return(
        <>
            <div style={styles.imgContainer}>

                <div style={styles.map}>
                    <Link to={'/'} style={isHoveringHome ? styles.linkActive : styles.linkInactive} onMouseEnter={handleHoverInHome} onMouseLeave={handleHoverOutHome}><span>Home</span></Link>
                    <span> &gt; </span>
                    <Link to={`/category/${product.category}`} style={isHoveringCat ? styles.linkActive : styles.linkInactive} onMouseEnter={handleHoverInCat} onMouseLeave={handleHoverOutCat}><span>{product.category}</span></Link>
                    <span> &gt; </span>
                    <span style={styles.active}>{product.name}</span>
                </div>

                <img src={require(`../img/${product.img}`)} style={styles.img}/>

            </div>
            <div style={styles.textContainer}>
                <h2 style={styles.name}>{product.name}</h2>
                <h3 style={styles.title}>{product.title}</h3>
                <p style={styles.desc}>{product.desc}</p>
                <p style={styles.price}>${product.price}</p>
                <div style={styles.buttonsContainer}>
                    <div style={styles.quantityContainer}>
                        <button style={isHoveringSub ? styles.quantityButtonsActive : styles.quantityButtonsInactive} onMouseEnter={handleHoverInSub} onMouseLeave={handleHoverOutSub} onClick={handleSub}>-</button>
                        <span style={styles.quantity}>{quantity}</span>
                        <button style={isHoveringAdd ? styles.quantityButtonsActive : styles.quantityButtonsInactive} onMouseEnter={handleHoverInAdd} onMouseLeave={handleHoverOutAdd} onClick={handleAdd}>+</button>
                    </div>
                    <button style={isHoveringATC ? styles.addToCartActive : styles.addToCartInactive} onMouseEnter={handleHoverInATC} onMouseLeave={handleHoverOutATC}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;