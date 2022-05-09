import React from 'react'
import './Footer.css'
import logo from '../../imgs/epallet-logo-blue.svg'

const Footer = () => {
  return (
    <section className="fotter-section">
      <footer className="footer">
        <div className="container">
      <hr/>
          <div className="main-footer-div">
            <div className="logo-footer">
              <a href="#">
                <img className="logo" src={logo} alt />
              </a>
              <p className="footer-text">
                C ePallet 2017. All right reserved.
              </p>
            </div>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Menu</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Courses
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Webinar
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Services</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Materials Update
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Trusted Mentor
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Free E-book
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Meeting
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Further Information</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Apps Download</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Google Play Store
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
