import React, { useState } from "react";

function ProductInput(props) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("Unbranded");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    if (name == "" || amount == 0 || price == 0) {
      alert("Some input fields are blank");
      return;
    }
    const product = {
      name: name,
      brand: brand,
      amount: amount,
      price: price,
    };

    props.onAddProduct(product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-slate-100 my-5">
      <legend className="pl-2">Enter new product:</legend>
      <input
        type="text"
        className="form-input"
        placeholder="product"
        title="Name of Product"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-input"
        placeholder="amount"
        onChange={(e) => setAmount(e.target.value)}
        title="Amount"
      />
      <input
        type="text"
        className="form-input"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        title="price"
      />

      <div className="form-input" title="brand name of product">
        <select
          name="todos"
          className=""
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="unbranded">Unbranded</option>
          <option value="hp">HP</option>
          <option value="lenovo">Lenovo</option>
          <option value="dell">DELL</option>
        </select>
      </div>

      <input type="submit" value="Submit" className="btn increment-btn" />
    </form>
  );
}

export default ProductInput;
