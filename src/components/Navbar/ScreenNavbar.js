import React, { useState, useEffect } from 'react';
import './index.scss';
import Home from '../../pages/Home';
import Company from '../../pages/Company';
import News from '../../pages/News'
import Contact from '../../pages/Contact';
import Business from '../../pages/Business';
import About from '../../pages/About';
import { Link, useLocation } from 'react-router-dom';

const ScreenNavbar = () => {

    const location = useLocation();
    const { pathname } = useLocation();

    return (
        <>
            <div className='main_nav'>
                <p>English | 繁體中文</p>
            </div>

            <div className='secNavbar'>
            <div style={{ position: 'absolute' }}>
                    <Link to="/"><img alt="" className='whiteNavbar' src={`/assets/webLogo.png`} /></Link>
                </div>
                <img alt="" className='pnav' src={`/assets/whiteNav.png`} />

            <div className='list'>
                <ul className="nav-items">
                    <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                    <li><Link to="/company" className={pathname === '/company' ? 'active' : ''}>Company Information</Link></li>
                    <li><Link to="/business" className={pathname === '/business' ? 'active' : ''}>Business Overview</Link></li>
                    <li><Link to="/news" className={pathname === '/news' ? 'active' : ''}>News 2022</Link></li>
                    <li ><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link> </li>
                </ul>
            </div>
            </div>
        </>
    )
}
export default ScreenNavbar;
