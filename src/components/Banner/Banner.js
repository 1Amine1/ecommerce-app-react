import React from 'react';
import './Banner.css';

const Banner = ({text,color}) => {
    return (
        <div className="banner" >
            {text}
        </div>
    );
};

export default Banner;