import React from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import StarIcon from '@material-ui/icons/Star';
import { removeFromCart } from '../../store/actions';
import { useStateValue } from '../../store/StateProvider';

import './CartItem.css'

export const CartItem = ({ id, title, price, image, rating, hideRemoveCartButton }) => {
    
    const [state, dispatch] = useStateValue();

    const removeItemtHandler = () => {
        toast.warn(`${title.slice(0,20)}... removed from cart!`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        dispatch(removeFromCart(id, price));
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

                { hideRemoveCartButton ? null : <button className="btn cartItem__remove" onClick={removeItemtHandler}>Remove from Cart</button>}
            </div>
        </div>
    );
}
