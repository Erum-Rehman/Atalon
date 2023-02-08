import './index.scss';
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import BgFooter from '../../components/BgFooter';

const Home = () => {

    return (
        <>
            <div className='bg_img'>
                <div id="overlay"> </div>
                <video autoPlay loop muted playsInline src='assets/Earth.mp4' />
                <Navbar />
                <div className="bg_img_heading">
                    <a href="#">https://elements.envato.com/earth-infographic-elements-SB78PYN</a>
                    <h2>Connecting to the innovation and technology era</h2>
                    <p>Atalon Ventures is committed to promote innovation and technology and aiming to included it<br />
                        in everyone’s daily lives. We strive to integrate innovative technology<br />
                        into create industries and services around the world.
                    </p>

                </div>
                <img className='atalon' alt="" src={`/assets/home_logo.png`} />
                <BgFooter />
            </div>
        </>
    )
}
export default Home;