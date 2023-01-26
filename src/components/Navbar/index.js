import React, { useState, useEffect } from 'react';
import './index.scss';
import Home from '../../pages/Home';
import Company from '../../pages/Company';
import News from '../../pages/News'
import Contact from '../../pages/Contact';
import Business from '../../pages/Business';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const { pathname } = useLocation();

    return (
        <>
            <div className='main_nav'>
                <p>English | </p>
            </div>

            <div id="wave">
                
            </div>
            {/* <div className="head">
                <Link to="/">
                    <div className="nav-logo">
                        <p>erumn</p>
                    </div>
                </Link>
            </div>
            <div className='list'>
                <ul className="nav-items">
                    <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home Page</Link></li>
                    <li><Link to="/company" className={pathname === '/Company' ? 'active' : ''}>Company Information</Link></li>
                    <li><Link to="/business" className={pathname === '/Business' ? 'active' : ''}>Business Overview</Link></li>
                    <li><Link to="/news" className={pathname === '/News' ? 'active' : ''}>News</Link></li>
                    <li ><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link> </li>
                </ul>
            </div> */}
           
        </>
    )
}
export default Navbar;
