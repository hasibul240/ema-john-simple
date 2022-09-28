import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css';

const Header = () => {
    return (
        <nav className='header '>
            <img src={logo} alt="" />
            <div>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manege Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;