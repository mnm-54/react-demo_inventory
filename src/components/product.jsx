import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.product.name} </td>
          <td>{this.props.product.brand} </td>
          <td>{this.props.product.amount}</td>
          <td>{this.props.product.price} </td>
          <td>
            <button
              className="btn btn-dark btn-sm m-2"
              onClick={() => {
                this.props.onIncrement(this.props.product);
              }}
            >
              Increment
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.product.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Product;
