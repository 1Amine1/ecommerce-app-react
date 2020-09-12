import React from 'react';
import { Subtotal } from '../Subtotal/Subtotal';
import { CartItem } from '../CartItem/CartItem';
import { useStateValue } from '../../store/StateProvider';
import { Link } from 'react-router-dom';
import './Checkout.css';

export const Checkout = ({ }) => {
    const [state, dispatch] = useStateValue();
    const cartItems = state.cart;

    const renderCartItems = cartItems.map((item, i) => (
            <CartItem id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rate={item.rating}
            />        
        )
    );

    const emptyCartRender = (
        <Link to='/'><button>Start Shoping</button></Link>
    )

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpeg"
                    alt="advertise_image"
                />
                <div className="checkout__title">
                    <h2>Your shopping cart has {cartItems.length} items</h2>                                        
                </div>
                <div className="checkout_items">
                    {/* display items selected in cart */}
                    { cartItems.length > 0 ? renderCartItems : emptyCartRender}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal subtotal={state.subtotal} numberOfItems={cartItems.length}/>                
            </div>
        </div>
    );
}
