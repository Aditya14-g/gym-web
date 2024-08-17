import React from 'react';
import './header.css';

function Header (){
    return(
        <div className='Header'>
            <h1 className='logo'>GYM</h1>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}

export default Header;