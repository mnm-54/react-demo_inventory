import React, { useState } from "react";

function Product(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.product.name} </td>
        <td>{props.product.brand} </td>
        <td>{props.product.amount}</td>
        <td>{props.product.price} </td>
        <td>
          <button
            className="btn btn-dark btn-sm m-2"
            onClick={() => {
              props.onIncrement(props.product);
            }}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => props.onDelete(props.product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Product;
