import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import { CartItem } from '../CartItem/CartItem';
import { Header } from '../Header/Header';

import './Payment.css';

export const Payment = () => {
    const history = useHistory();
    const [{user, cart, subtotal}] = useStateValue();

    if (subtotal <= 0) history.push('/');
    
    return (
        <>
            <Header />    
            <div className="payment">
                <div className="payment__container">
                    <h1>Checkout</h1>
                    {/* Delivery Address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    {/* Review Items */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items</h3>
                        </div>
                        <div className="payment__items">
                            {cart.map((item, i) => {
                                return <CartItem
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            } )}
                        </div>
                    </div>

                    {/* Payment method/ Pay */}
                    <div className="payment__section">
                        <div className="payment__title">
                            {/* <h3 className="">Your total is {subtotal}</h3>  */}
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            Enter your card details here
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
