import React, { useState } from "react";

function NavBar(props) {
  const productCount = () => {
    let sum = props.amountProducts.reduce(function (x, y) {
      return x + y;
    }, 0);
    return sum;
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Inventory{" "}
          <span className="badge bg-pill bg-secondary">{productCount()}</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
