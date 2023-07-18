import React from "react";

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h1>Dawanau</h1>
          {/* <p>Commodity Market</p> */}
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Browse Products</a>
            </li>
          </ul>
          <div className="icons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
