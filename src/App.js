import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
