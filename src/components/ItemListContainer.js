import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const productsCollection = collection(db, 'products');

        getDocs(productsCollection).then(
            (data) => {
                const productList = data.docs.map(product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                });
                if (id === undefined) {
                    setProducts(productList)
                 } else{
                    setProducts(productList.filter(product => product.category === id))
                 }
            }
        )
    }, [id])
    
    return(
        <div style={styles.container}>
            {products.length ? (
                <ItemList products={products}/>
            ) : (
                <h1>Loading...</h1>
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