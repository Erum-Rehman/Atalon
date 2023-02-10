import React, { useState, useEffect } from 'react';
import HomeMobile from './HomeMobile';
import HomeScreen from './HomeScreen';
import { useLocation } from "react-router-dom";

const HomeNavbar = () => {

    const location = useLocation();
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
            {width <=975 ? <HomeMobile /> : <HomeScreen />}
        </>
    )
}
export default HomeNavbar;