import React from "react";
import "./Header.css";
import logo from "../../imgs/epallet-logo-blue.svg"

function Header() {
  return (
    <div>
      <div className="backround">
        <div className="header container">
          <div className="header__left">
            <p className="header__title">Eng</p>
            <div className="header__icon">
              <i class="bx bx-location-plus"></i>
              Austin, TX
            </div>
          </div>
          <div className="header__right">
            <a className="header__link linkAcitve" href="+998992876">
              +99890234-12-32
            </a>
            <a className="header__link" href="+998992876">
              Help Center
            </a>
          </div>
        </div>
      </div>
      <div className="site container">
          <div className="site__left">
            <div className="site__logo">
                <img  className="site__img" src={logo} alt="" />
                <div className="site__main-input">
                <i class='bx bx-search site__search'></i>
                  <input className="site__input" type="text" placeholder="Type to search" />
                  <div className="site__contegroes">
                    <p className="site__all">All contegoies</p>
                    <i class='bx bx-chevron-down'></i>
                  </div>
                </div>
            </div>
          </div>
          <div className="site__right">  
            <div className="site__rihgt-icons">
                <div className="site__oreder-div siteAcitve">
                <i class='bx bx-border-outer siteorder'></i>
                <p className="site__order">Order</p>
                </div>
                <div className="site__oreder-div siteAcitve">
                <i class='bx bx-cart-add siteorder'></i>
                <p className="site__order">Cart</p>
                </div>
                <div className="site__oreder-div">
                <i class='bx bxs-user siteorder'></i>
                <p className="site__order">Profile</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
