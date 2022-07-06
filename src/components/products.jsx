import React, { useState } from "react";
import Product from "./product";

function Products(props) {
  let styles = {
    width: "80%",
  };

  return (
    <div>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onReset()}
      >
        Reset
      </button>
      <table className="table table-striped m-2" style={styles}>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Brand</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <Product
              key={product.id}
              onDelete={props.onDelete}
              product={product}
              onIncrement={props.onIncrement}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
