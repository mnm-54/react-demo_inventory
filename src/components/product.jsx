import React from "react";
import ImageSlider from "./imageSlider";

function Product(props) {
  return (
    <React.Fragment>
      <tr className="hover:bg-slate-200">
        <td className="tbl-data">{props.product.name} </td>
        <td className="tbl-data">{props.product.brand} </td>
        <td className="tbl-data">{props.product.amount}</td>
        <td className="tbl-data">{props.product.price} </td>
        <td className="tbl-data">
          <ImageSlider slides={props.product.imgUrl} />
        </td>
        <td className="tbl-data">
          <button
            className="btn increment-btn"
            onClick={() => {
              props.onIncrement(props.product);
            }}
            title={"Increment by 1"}
          >
            Increment
          </button>
          <button
            className="btn decrement-btn"
            onClick={() => {
              props.onDecrement(props.product);
            }}
            title={"Decrement by 1"}
          >
            Decrement
          </button>
          <button
            className="btn btn-reset"
            onClick={() => props.onDelete(props.product.id)}
            title={"Delete product"}
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Product;
