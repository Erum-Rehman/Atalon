import React, { useState, useEffect } from 'react';
import './index.scss';
import Home from '../../pages/Home';
import Company from '../../pages/Company';
import News from '../../pages/News'
import Contact from '../../pages/Contact';
import Business from '../../pages/Business';
import About from '../../pages/About';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MobileNavbar = () => {

    const location = useLocation();
    const { pathname } = useLocation();

    return (
        <>
           <div className='main_nav'>
                <p>English | 繁體中文</p>
            </div>

            <div className='secNavbar'>
                <img alt="" className='pnav_m' src={`/assets/mobNav.png`} />

            <div className='list_m'>
                <ul className="nav-items_m">
                    <li><Link to="/" className={pathname === '/' ? 'active' : ''}><img src={`/assets/home.png`}/></Link></li>
                    <li><Link to="/company" className={pathname === '/Company' ? 'active' : ''}><img src={`/assets/co.png`}/></Link></li>
                    <li><Link to="/business" className={pathname === '/Business' ? 'active' : ''}><img src={`/assets/business.png`}/></Link></li>
                    <li><Link to="/news" className={pathname === '/News' ? 'active' : ''}><img src={`/assets/newsIcon.png`}/></Link></li>
                    <li ><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}><img src={`/assets/contact.png`}/></Link> </li>
                </ul>
            </div>
            </div>
        </>
    )
}
export default MobileNavbar;
