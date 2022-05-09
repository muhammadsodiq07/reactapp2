import React from "react";
import "./Table.css";


const Table = () => {
  return (
    <div>
      <div className="table container">
        <ul className="table__list">
          <li className="table__item">
            <a className="table__link" href="#">
              Overview
            </a>
          </li>
          <li className="table__item">
            <a className="table__link tableActive" href="#">
              Nutritionals
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="#">
              Palette/Case Configuration
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="#">
              Shopping/Storage
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="#">
              Dosc & Certs
            </a>
          </li>
        </ul>
        <div className="table__box">
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2">Serving Size:</p>
              <span>30g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Serving Per Container:</p>
              <span>3.3</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs">Amount Per Serving</p>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2">Calories</p>
              <span>140</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Calories from Fat</p>
              <span>60</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2"></p>
              <span></span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">% Daily Value</span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Total</p>
              <span>6g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span>10%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs">Cholesterol</p>
              <span>5mg</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span>1%</span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2">Sodiun</p>
              <span>65g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span>3%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs">Protein</p>
              <span>1g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span></span>
            </div>
          </div>
        </div>
        <div className="table__value">
          <span className="table__val2">
            *Percent Daily Values are base on a 2.000 calorie diet.
          </span>
        </div>
        <p className="table__text2">
          <span className="tabel__text3">Ingredients:</span> Brown Sugar, Popconr, Caramel Corn Mix(corn syrup solids, brown sugar, molasses, soy lecithin and cream of tartar), Milk Chocolate,Coanla Oil,Butter, COncut Oil, Salt, Table.
        </p>
      </div>
    </div>
  );
};

export default Table;
