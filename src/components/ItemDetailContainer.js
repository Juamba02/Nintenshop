import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
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
            try{
              setProduct(productList.find((prod) => prod.id === id))
            } finally {
              setLoading(false)
            }
            
        }
    )
}, [])

  return (
    <div style={styles.container}>
      {<>{loading ? <h1>Loading...</h1> : <ItemDetail product={product} />}</>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    marginBottom: "50px",
  },
};

export default ItemDetailContainer;
