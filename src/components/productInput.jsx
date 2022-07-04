import React, { Component } from "react";

class ProductInput extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Server"
            aria-label="Server"
          />
        </div>
        <input
          type="text"
          className="product-input"
          placeholder="product"
          title="Name of Product"
        />
        <input
          type="text"
          className="amount-input"
          placeholder="amount"
          title="Amount"
        />
        <input
          type="text"
          className="amount-price"
          placeholder="price"
          title="price"
        />

        <div className="select" title="brand name of product">
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option value="unbranded">Unbranded</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="dell">DELL</option>
          </select>
        </div>

        <button
          className="btn btn-primary add-button submit px-4"
          type="submit"
          title="Add new product"
        >
          Add Product
        </button>
      </form>
    );
  }
}

export default ProductInput;
