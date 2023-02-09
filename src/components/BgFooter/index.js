import React, { useState, useEffect } from 'react';
import MobileGrp from './MobileGrp';
import ScreenGrp from './ScreenGrp';
import { useLocation } from "react-router-dom";

const BgFooter = () => {

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
            {width <=766 ? <MobileGrp /> : <ScreenGrp />}
        </>
    )
}
export default BgFooter;