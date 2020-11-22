import React from 'react';
import './Navbar.css'
import logo from '../../../Illustration/Group 86.png'
const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/">
      <img style={{width:"140px"}} src={logo} alt=""/>
  </a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item active">
        <a className="nav-link pr-4" href="">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-4" href="">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-4" href="">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-4" href="">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-4" href="">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-4 btn text-white" href="">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
};

export default Navbar;