import React from "react";

function Product(props) {
  const downloadImg = () => {
    var element = document.createElement("a");
    var file = new Blob([props.product.imgUrl], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <React.Fragment>
      <tr className="hover:bg-slate-200">
        <td className="tbl-data">{props.product.name} </td>
        <td className="tbl-data">{props.product.brand} </td>
        <td className="tbl-data">{props.product.amount}</td>
        <td className="tbl-data">{props.product.price} </td>
        <td className="tbl-data">
          <img
            className="object-cover h-48 w-96"
            alt="product image"
            onClick={downloadImg}
            src={props.product.imgUrl}
          ></img>{" "}
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
