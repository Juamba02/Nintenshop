import React from "react";

const ItemDetail =  ({product}) => {
    return(
        <img src={require(`../img/${product.img}`)} />
    )
}

export default ItemDetail;