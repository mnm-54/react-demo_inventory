import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import ProductInput from "./components/productInput";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { DB } from "./firebase-config";

function App() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(DB, "products");

  useEffect(() => {
    let mounted = true;
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(products);
    };
    getProducts();
    return () => (mounted = false);
  }, []);

  let handleDelete = (productId) => {
    const newproducts = products.filter((product) => product.id !== productId);
    setProducts(newproducts);
    deleteProduct(productId);
  };
  let deleteProduct = async (id) => {
    console.log(id);
    const productDoc = doc(DB, "products", id);
    await deleteDoc(productDoc);
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
      const productDoc = doc(DB, "products", id);
      const newFields = { amount: amount };
      await updateDoc(productDoc, newFields);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  let addProduct = (product) => {
    console.log(product);
    setProducts((products) => [...products, product]);
  };

  return (
    <React.Fragment>
      <NavBar
        amountProducts={products.map((p) => {
          return p.amount;
        })}
      />
      <ProductInput onCreate={addProduct} />
      <Products
        products={products}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </React.Fragment>
  );
}

export default App;
