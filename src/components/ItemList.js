import React, { useEffect, useState } from "react";
import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </>
  );
};

export default ItemList;
