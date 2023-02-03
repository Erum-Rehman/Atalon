import './index.scss';
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = useLocation();
    const [width, setWidth] = useState(window.screen.width);

    useEffect(() => {

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }

    }, [window.screen.width])

    const updateDimensions = () => {
        setWidth(window.screen.width)
    };

    return (
        <>
            <div className='bg_img'>
                <div id="overlay"> </div>
                    <video autoPlay loop muted playsInline src='assets/Earth.mp4' />
                    {/* <Navbar/> */}
                    <div className="bg_img_heading">
                        <a href="#">https://elements.envato.com/earth-infographic-elements-SB78PYN</a>
                        <h2>Connecting to the innovation and technology era</h2>
                        <p>Atalon Ventures is committed to promote innovation and technology and aiming to included it<br />
                            in everyone’s daily lives. We strive to integrate innovative technology<br />
                            into create industries and services around the world.
                        </p>

                    </div>
                    <img className='atalon' alt="" src={`/assets/home_logo.png`} />

            {width <=740 ?                     
            <img alt="" className='grp_div' style={{ width: '101%', marginTop: 'auto' }} src={`/assets/mob_bot.png`} />
          : <img alt="" className='grp_div' style={{ width: '101%', marginTop: 'auto' }} src={`/assets/Group 7654.png`} />
            }
            </div>
        </>
    )
}
export default Home;