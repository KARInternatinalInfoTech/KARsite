import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');

  const navbarClick = (id) => {
    setActiveItem(id);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-home-container">
      <a className="navbar-brand" href="#">
        <img src='/images/logo.svg' width={25} height={25} alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav-bar-home-elements">
          <Link to='/' onClick={() => navbarClick('item1')}>
            <li className={`nav-item ${activeItem === 'item1' ? 'active' : ''}`} id='item1'>Home</li>
          </Link>
          <Link to='/services' onClick={() => navbarClick('item2')}>
            <li className={`nav-item ${activeItem === 'item2' ? 'active' : ''}`} id='item2'>Services</li>
          </Link>
          <Link to='/products' onClick={() => navbarClick('item3')}>
            <li className={`nav-item ${activeItem === 'item3' ? 'active' : ''}`} id='item3'>Products</li>
          </Link>
          <Link to='/aboutus' onClick={() => navbarClick('item4')}>
            <li className={`nav-item ${activeItem === 'item4' ? 'active' : ''}`} id='item4'>About Us</li>
          </Link>
          <Link to='/careers' onClick={() => navbarClick('item5')}>
            <li className={`nav-item ${activeItem === 'item5' ? 'active' : ''}`} id='item5'>Careers</li>
          </Link>
          <Link to='/contactus' onClick={() => navbarClick('item6')}>
            <li className={`nav-item contact-us-button ${activeItem === 'item6' ? 'active' : ''}`} id='item6'>
              <div className='contact-us-button'>
                <p className='contact-us-button-text'>Get Quote</p>
              </div>
            </li>
          </Link>
          <Link to='/contactus' onClick={() => navbarClick('item7')}>
            <li className={`nav-item ${activeItem === 'item7' ? 'active' : ''}`} id='item7'>Contact Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
