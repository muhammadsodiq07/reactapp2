import React, { Component } from 'react'

class MottsText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      count1: 32,
      count2: 730,
    }
  }

  isCount = () => {
    this.setState({ count: this.state.count + 10 })
  }

  isCountInput = () => {
    this.setState({ count: this.state.count + 1})
    this.setState({ count1: this.state.count1 + 32 })
    this.setState({ count2: this.state.count2 + 32 })
  }
  isMinusCount = () => {
    if(this.state.count > 0){
      this.setState({ count: this.state.count - 1 })
      this.setState({ count1: this.state.count1 - 32 })
      this.setState({ count2: this.state.count2 - 32 })
    }
    
  }
  render() {
    return (
      <div>
        <div className="mottsText">
          <p className="motts__name">MOOT'S</p>
          <h2 className="motts__title">Mott's Unsweetend Applesauce</h2>
          <p className="motts__p">
            Pack Size: <span className="motts__span">24/16.90 oz</span>
          </p>
          <p className="motts__text">
            Chef Maxwell Applesauce is a delicious classic and part of a healthy
            diet low in staurated fat with 40% Vitamin C.
          </p>

          <div className="motts__dow">
            <i class="bx bxl-markdown"></i>
            <a className="motts__link" href="#">
              Download Spec Sheet
            </a>
          </div>
          <hr />

          <div className="motts__main-count">
            <div className="motts__firts-count">
              <p className="motts__count">${this.state.count1}</p>
              <span className="motts__span">80</span>
              <p className="motts__cs">/Cs</p>
              <span className="motts__so">(SO.21/oz)</span>
            </div>
            <div className="motts__second-count">
              <p className="motts__count-sev">${this.state.count2}</p>
              <span className="motts__span2">30</span>
              <p className="motts__plt">/Plt</p>
            </div>
          </div>
          <div className="motts__approx">
            <p className="motts__app-title">
              Approx Lead Time:
              <span className="motts__days">12 days</span>
            </p>
            <span className="motts__span-info">
              Information about product was provided by manufacturer
            </span>
          </div>
          <div className="motts__input-div">
            <div className="motts__count1-flex">
              <div className="motts__text-content">{this.state.count}</div>
              <div className="motts__count-column">
                <button onClick={this.isCountInput} className="motts__btn btn1">
                  <i class="bx bxs-up-arrow motts-icon"></i>
                </button>
                <button onClick={this.isMinusCount} className="motts__btn btn2">
                  <i class="bx bxs-down-arrow motts-icon"></i>
                </button>
              </div>
            </div>
            <div className="motts__input-add-cart">
              <button className="motts__buttons buttons1">
                <i class="bx bx-cart-download"></i>
                Add to Cart
              </button>
              <button className="motts__buttons">
                <i class="bx bxs-brightness"></i>
                Custom Pallet
              </button>
            </div>
          </div>
            <span className="motts__minimus">Minimum pallet quantity: 2</span>
            <div className="motts__add-div">
            <i class='bx bx-star' ></i>
            <a className="motts__add-link" href="a">
              Add to Wishlist
            </a>
            </div>
        </div>
      </div>
    )
  }
}

export default MottsText
