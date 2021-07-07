import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
        <img src={ReactLogo} alt="React Logo" />
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        </div>
    </div>
)

export default Header;