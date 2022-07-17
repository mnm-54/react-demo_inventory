import React, { useState } from "react";

function NavBar(props) {
  const productCount = () => {
    let sum = props.amountProducts.reduce(function (x, y) {
      return x + y;
    }, 0);
    return sum;
  };

  return (
    <nav className="p-4 bg-slate-300">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="text-blue-800 py-2 pl-2">Inventory </span>
          <span className="badge">{productCount()}</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
