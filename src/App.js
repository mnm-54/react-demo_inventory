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
    let mounted = true;
    api.get("/").then((res) => {
      if (mounted) {
        setProducts(res.data);
      }
    });
    return () => (mounted = false);
  }, []);

  let handleDelete = (productId) => {
    const newproducts = products.filter((product) => product.id !== productId);
    setProducts(newproducts);
    deleteProduct(productId);
  };
  let deleteProduct = async (id) => {
    let data = await api.delete(`/products/${id}`);
  };

  let handleIncrement = (product) => {
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index].amount++;
    setProducts(newProducts);
    updateProduct(newProducts[index].id, newProducts[index].amount);
  };
  let handleDecrement = (product) => {
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index].amount--;
    setProducts(newProducts);
    updateProduct(newProducts[index].id, newProducts[index].amount);
  };
  let updateProduct = async (id, amount) => {
    try {
      let data = await api.put(`/products/${id}`, { amount: amount });
    } catch (err) {
      console.log("error: ", err);
    }
  };

  let addProduct = async (product) => {
    try {
      await api.post("/", product).then((res) => {
        setProducts(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  let handleReset = () => {
    const newProducts = products.map((product) => {
      product.amount = 0;
      return product;
    });

    setProducts(newProducts);
    resetProducts(newProducts);
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
      <NavBar
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
      />
    </React.Fragment>
  );
}

export default App;
