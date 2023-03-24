import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import Carousel from "./Carousel";
import styles from "../styles/ItemListContainer.styles";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isNotloading, setIsNotLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsNotLoading(false);
    setTimeout(() => {
      setIsNotLoading(true);
    }, 1000);
  }, [id]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    getDocs(productsCollection).then((data) => {
      const productList = data.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      if (id === undefined) {
        setProducts(productList);
      } else {
        setProducts(productList.filter((product) => product.category === id));
      }
    });
  }, [id]);

  return (
    <div style={styles.container}>
      {isNotloading ? (
        id === undefined ? (
          <>
            <div style={styles.carContainer}>
              <p style={styles.featured}>Featured products:</p>
              <Carousel />
            </div>

            <div style={styles.itemContainer}>
              <ItemList products={products} />
            </div>
          </>
        ) : (
          <div style={styles.itemContainer}>
            <ItemList products={products} />
          </div>
        )
      ) : (
        <div style={styles.loader}>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
