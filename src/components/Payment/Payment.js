import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useStateValue } from '../../store/StateProvider';
import { CartItem } from '../CartItem/CartItem';
import { Header } from '../Header/Header';


import './Payment.css';
import CurrencyFormat from 'react-currency-format';

export const Payment = () => {
    const history = useHistory();
    const [{user, cart, subtotal}] = useStateValue();
    if (subtotal <= 0) history.push('/');

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        // call stripe API to charge user on sumit Buy Now login__button
        e.preventDefault();
        setProcessing(true);
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }
    
    return (
        <>
            {/* <Header />     */}
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
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} autoFocus={true}/>
                                
                                {error && <div style={{ color: "red" }}>{error}</div>}
                                
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => {
                                            return <h3>Order Total: {value}</h3>
                                        }}
                                        decimalScale={2}
                                        value={subtotal}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={ processing || disabled || succeeded}>
                                        <span> {processing ? <p>Processing...</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
