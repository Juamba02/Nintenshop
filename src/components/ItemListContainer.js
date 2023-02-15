import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProductList = async () => {
            const res = await fetch("https://api.npoint.io/83c938b057c80071084c");
            const data = await res.json();
            setProducts(data);
        }
        getProductList();
    }, [])
    
    return(
        <div style={styles.container}>
            {products.length ? (
                <ItemList products={products} />
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    )
}

const styles = {
    container : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }
}


export default ItemListContainer;