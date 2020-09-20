import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { REMOVE_FROM_CART } from '../../store/action_types';
import { useStateValue } from '../../store/StateProvider';

import './CartItem.css'

export const CartItem = ({ id, title, price, image, rating }) => {
    
    const [state, dispatch] = useStateValue();

    const removeItemtHandler = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            itemId: id,
            itemPrice: price,
        });
    };
 
    return (
        <div className="cartItem">
            <img className="cartItem__image" src={image} alt="Product Image" />
            <div className="cartItem__info">
                <p className="cartItem__title cartItem__info_mb_10"> {title} </p>
                
                <p className="cartItem__price ">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="cartItem__rating">
                    {rating ? Array(Math.floor(rating))
                        .fill()
                        .map((_, i) => {
                            return <StarIcon style={{ color: 'yellow' }}/>
                        }) : null}
                </div>

                <button className="btn cartItem__remove" onClick={removeItemtHandler}>Remove from Cart</button>
            </div>
            
            

        </div>
    );
}
