import React, { useState, useEffect } from 'react';
import MobileNavbar from './MobileNavbar';
import ScreenNavbar from './ScreenNavbar';
import { useLocation } from "react-router-dom";

const Navbar = () => {

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
            {width <=975 ? <MobileNavbar /> : <ScreenNavbar />}
        </>
    )
}
export default Navbar;