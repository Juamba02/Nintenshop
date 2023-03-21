import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import Carousel from "./Carousel";

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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "21.5vh"
  },
  itemContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  loader: {
    height: "60vh",
  },
  featured: {
    fontSize: "2em",
    fontWeight: "500",
    padding: "1em",
    borderRadius: "10px",
    color: 'white'
  },
  carContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",  
    background: "#E40112",
    boxShadow: "10px 20px 7px #dfdfdf",
    marginTop: '1em',
    borderRadius: '10px',
    overflow: 'hidden'
  },
};

export default ItemListContainer;
