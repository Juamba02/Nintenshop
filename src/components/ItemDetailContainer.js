import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await fetch("https://api.npoint.io/83c938b057c80071084c");
                const data = await res.json();
                setProduct(data.find(prod => prod.id === id))
            } finally {
                setLoading(false)
            }
        }
        getProduct();
    }, [])

    return(
        <div style={styles.container}>
            {<>{loading ? <h1>Loading...</h1> : <ItemDetail product={product} />}</>}
        </div>
    )
}

const styles = {
    container : {
        display: 'flex',
        marginBottom: '21.5vh'
    }
}

export default ItemDetailContainer;