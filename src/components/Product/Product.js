import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../store/StateProvider';
import { ADD_TO_CART} from '../../store/action_types';


import './Product.css';

export const Product = ({ id, title, price, image, rating }) => {

    const [state, dispatch] = useStateValue();
   
    const addToCartHandler = () => {
        dispatch({
            type: ADD_TO_CART,
            item: {
                id,
                title,
                price,
                image,
                rating
            },
        });
    }


    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    {title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {rating ? Array(Math.floor(rating))
                        .fill()
                        .map((_, i) => {
                            return <StarIcon style={{ color: 'yellow' }}/>
                        }) : null}
                </div>
            </div>
            
            <img className="product__image" src={image} alt="Product Image" />
            
            <button className="btn product__add" onClick={addToCartHandler}>Add to Cart</button>
            

        </div>
    );
}
