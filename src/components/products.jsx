import React, { useState } from "react";
import Product from "./product";

function Products(props) {
  let styles = {
    width: "90%",
  };

  return (
    <div>
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
              onDecrement={props.onDecrement}
            />
          ))}
        </tbody>
      </table>
      <button
        className="btn btn-danger btn-sm m-2"
        title="Reset amount to zero for all product"
        onClick={() => props.onReset()}
      >
        Reset
      </button>
    </div>
  );
}

export default Products;
