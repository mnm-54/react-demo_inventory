import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import axios from "axios";
import ProductInput from "./components/productInput";

const api = axios.create({
  baseURL: `http://127.0.0.1:3000/`,
});

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res.body);
      setProducts(res.body);
    });
    console.log(products);
  });

  let handleDelete = (productId) => {
    const products = products.filter((product) => product.id !== productId);
    setProducts(products);
    deleteProduct(productId);
  };
  let deleteProduct = async (id) => {
    let data = await api.delete(`/products/${id}`);
  };

  let handleIncrement = (product) => {
    const products = [...products];
    const index = products.indexOf(product);
    products[index].amount++;
    setProducts(products);
    updateProduct(products[index].id, products[index].amount);
  };
  let handleDecrement = (product) => {
    const products = [...products];
    const index = products.indexOf(product);
    products[index].amount--;
    setProducts(products);
    updateProduct(products[index].id, products[index].amount);
  };
  let updateProduct = async (id, amount) => {
    try {
      let data = await api.put(`/products/${id}`, { amount: amount });
      console.log("req sent");
    } catch (err) {
      console.log("error: ", err);
    }
  };

  let addProduct = async (product) => {
    try {
      console.log(product);
      await api.post("/", product).then((res) => {
        setProducts(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  let handleReset = () => {
    const products = products.map((product) => {
      product.amount = 0;
      return product;
    });

    setProducts(products);
    resetProducts(products);
  };
  let resetProducts = async (products) => {
    try {
      await api.post("/reset", products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {/* <NavBar
        amountProducts={products.map((p) => {
          return p.amount;
        })}
      />
      <ProductInput onAddProduct={addProduct} />
      <Products
        products={products}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      /> */}
    </React.Fragment>
  );
}

export default App;
