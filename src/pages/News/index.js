import React, { useState, useEffect } from 'react';
import NewsMobile from './NewsMobile';
import NewsScreen from './NewsScreen';
import { useLocation } from "react-router-dom";

const News = () => {

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
            {width <=907 ? <NewsMobile /> : <NewsScreen />}
        </>
    )
}
export default News;