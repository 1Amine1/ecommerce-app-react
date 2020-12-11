import React from 'react';
import { Header } from '../Header/Header';
import './ProductDetail.css';

export const ProductDetail = ({id, name, price, description, image, rating}) => {
    return (

        <div className="productDetail">
            <Header />
            <div className="productDetail_container">
                <h3>{ name} more details about product will show here. WIP</h3>
            </div>
        </div>
    );
};
