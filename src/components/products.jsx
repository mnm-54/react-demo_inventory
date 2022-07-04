import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  styles = {
    width: "80%",
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onReset()}
        >
          Reset
        </button>
        <table className="table table-striped m-2" style={this.styles}>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Brand</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <Product
                key={product.id}
                onDelete={this.props.onDelete}
                product={product}
                onIncrement={this.props.onIncrement}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
