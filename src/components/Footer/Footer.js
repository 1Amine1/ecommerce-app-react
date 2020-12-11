import React from 'react';
import './Footer.css';

export const Footer = () => {
    // const currentYear = new Date()

    return (
        <div className="footer">
            <p>This site is developed by <a href="https://bit.ly/devarsh19" target="_blank">Devarsh Patel</a>  &#169; { new Date().getFullYear() }</p>
            {/* <p><a href="#">Click Here</a> to see which technologies are used by Devarsh to build this site</p> */}
        </div>
    );
};

