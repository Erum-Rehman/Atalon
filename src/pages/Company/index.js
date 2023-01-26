import React, { useState, useEffect } from 'react';
import MobileScreen from './MobileScreen';
import CompanyScreen from './CompanyScreen';
import { useLocation } from "react-router-dom";

const Company = () => {

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
            {width <=1024 ? <MobileScreen /> : <CompanyScreen />}
        </>
    )
}
export default Company;