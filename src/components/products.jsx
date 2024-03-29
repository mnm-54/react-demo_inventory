import React from "react";
import Product from "./product";

function Products(props) {
  let styles = {
    width: "90%",
  };

  return (
    <div>
      <table
        className="m-2 border-collapse border border-slate-600"
        style={styles}
      >
        <thead>
          <tr>
            <th className="tbl-header">Product name</th>
            <th className="tbl-header">Brand</th>
            <th className="tbl-header">Amount</th>
            <th className="tbl-header">Price</th>
            <th className="tbl-header">Preview</th>
            <th className="tbl-header"></th>
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
    </div>
  );
}

export default Products;
