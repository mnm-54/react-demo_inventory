import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inventory{" "}
            <span className="badge bg-pill bg-secondary">
              {this.productCount()}
            </span>
          </a>
        </div>
      </nav>
    );
  }

  productCount = () => {
    let sum = this.props.amountProducts.reduce(function (x, y) {
      return x + y;
    }, 0);
    return sum;
  };
}

export default NavBar;
