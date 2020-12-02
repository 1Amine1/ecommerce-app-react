import React from 'react';
import './Banner.css';

const Banner = ({text}) => {
    return (
        <div className="banner">
            {text}
        </div>
    );
};

export default Banner;