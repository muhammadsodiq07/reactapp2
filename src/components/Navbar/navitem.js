import React from "react";

function NavbarItem(props) {
  return (
    <li className="nav__item">
      <a className="nav__links" href="#">{props.itemName}</a>
    </li>
  );
}
export default NavbarItem;
