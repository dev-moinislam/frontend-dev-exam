import React from 'react';
import bookCart from '../assets/bookCart.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <Link className='header-link' to='/'>
                <img src={bookCart} alt="Library Logo" className="logo" />
                <p className='header-text'>Book Cart</p>
            </Link>
        </header>
    );
};

export default Header;
