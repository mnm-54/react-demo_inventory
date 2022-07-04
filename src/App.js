import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import ProductInput from "./components/productInput";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "laptop", brand: "hp", amount: 100, price: 10000 },
      { id: 2, name: "monitor", brand: "dell", amount: 250, price: 100 },
      { id: 3, name: "keyboard", brand: "unbranded", amount: 500, price: 50 },
      { id: 4, name: "notepad", brand: "lenovo", amount: 150, price: 150 },
    ],
  };

  handleDelete = (productId) => {
    const products = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products: products });
  };
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].amount++;
    this.setState({ products: products });
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
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
