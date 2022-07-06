import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import axios from "axios";
import ProductInput from "./components/productInput";

const api = axios.create({
  baseURL: `http://127.0.0.1:3000/`,
});

class App extends Component {
  state = {
    products: [],
  };

  constructor() {
    super();
    api.get("/").then((res) => {
      this.setState({ products: res.data });
    });
  }

  handleDelete = (productId) => {
    const products = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products: products });
    this.deleteProduct(productId);
  };
  deleteProduct = async (id) => {
    let data = await api.delete(`/products/${id}`);
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].amount++;
    this.setState({ products: products });
    this.updateProduct(products[index].id, products[index].amount);
  };
  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].amount--;
    this.setState({ products: products });
    this.updateProduct(products[index].id, products[index].amount);
  };
  updateProduct = async (id, amount) => {
    try {
      let data = await api.put(`/products/${id}`, { amount: amount });
      console.log("req sent");
    } catch (err) {
      console.log("error: ", err);
    }
  };

  addProduct = async (product) => {
    try {
      console.log(product);
      await api.post("/", product).then((res) => {
        this.setState({ products: res.data });
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleReset = () => {
    const products = this.state.products.map((product) => {
      product.amount = 0;
      return product;
    });

    this.setState(products);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          amountProducts={this.state.products.map((p) => {
            return p.amount;
          })}
        />
        <ProductInput onAddProduct={this.addProduct} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
