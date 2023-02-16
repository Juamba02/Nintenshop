import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const getProductList = async () => {
            const res = await fetch("https://api.npoint.io/83c938b057c80071084c");
            const data = await res.json();
            {id === undefined ? (
                setProducts(data)
            ) : (
                setProducts(data.filter(product => product.category === id))
            )}
        }
        getProductList();
    }, [id])
    
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
        justifyContent: 'flex-start',
        marginBottom: '21.5vh'
    }
}


export default ItemListContainer;