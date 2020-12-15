import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../store/StateProvider';
import { ADD_TO_CART } from '../../store/action_types';
import { addToCart} from '../../store/actions';



import './Product.css';

export const Product = ({ id, title, price, image, rating }) => {

    const [state, dispatch] = useStateValue();
    const [showCartButton, setCartButton] = useState(false);

    const addToCartHandler = (e) => {
        e.preventDefault();
        toast.success(`${title.slice(0,20)}... added to cart successfully!`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        dispatch(addToCart(id, title, price, image, rating));
        setCartButton(true);
    }

    const viewProductHandler = () => {
        return 
    }

    return (
        <Link to={`/products/${id}`} target="_blank">
            <div className="product" >
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

                <div className="product__action">
                    <button className="btn product__add_btn" onClick={(e) => addToCartHandler(e)}>Add to Cart</button>
                    {/* <button className="btn product__view_btn"><Link to={`/products/${id}`} name={title} >View Product</Link></button> */}
                </div>
                
                {/* {showCartButton ? <button className="btn product__add" onClick={addToCartHandler}>View Cart</button> : null} */}
                
            </div>
        </Link>
        
    );
}
