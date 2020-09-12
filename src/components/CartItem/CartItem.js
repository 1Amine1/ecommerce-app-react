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
        });
    };
 
    return (
        <div className="cart_item">
            <p className="cart_item__title">
                    {title}
            </p>
            <p className="cart_item__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="cart_item__rating">
                {rating ? Array(Math.floor(rating))
                    .fill()
                    .map((_, i) => {
                        return <StarIcon style={{ color: 'yellow' }}/>
                    }) : null}
            </div>
            
            <button className="btn cart_item__remove" onClick={removeItemtHandler}>Remove from Cart</button>

        </div>
    );
}
