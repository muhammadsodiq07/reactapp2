import React from "react";
import "./Navbar.css";
import NavbarItem from "./navitem";

let navbars = [
  "Food Service",
  "Health & Beaty",
  "Industrial Ingredients",
  "Beverages",
  "Pet Supplies",
  "Frozen",
  "Cleaning Products",
];

function Navbar() {
  return (
    <div>
      <ul className="navbar container">
        {navbars.map((nav, i,elId) => {
          return <NavbarItem key={i} itemName={nav} />;
        })}
      </ul>
      <ul className="nav container">
        <li className="nav2__item">
          <a className="nav2__link" href="#">
              Frozen
          </a>
          <i class='bx bxs-chevron-right nav2__icon' ></i>
        </li>
        <li className="nav2__item">
          <a className="nav2__link" href="#">
              Juice
          </a>
          <i class='bx bxs-chevron-right nav2__icon' ></i>
        </li>
        <li className="nav2__item">
          <a className="nav2__link" href="#">
              Mott's Unsweetend Applesauce
          </a>
        </li>
      </ul>
      <div className="backdiv container">
      <i class='bx bx-arrow-back'></i>
      <p className="back">Back</p>
      </div>
    </div>
  );
}

export default Navbar;
