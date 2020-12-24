import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../store/StateProvider';
import { applyDiscount, emptyCart } from '../../store/actions';
import { CartItem } from '../CartItem/CartItem';
import Banner from '../Banner/Banner';
import './Payment.css';

export const Payment = () => {
    const history = useHistory();
    const [{user, cart, subtotal, subtotal_after_discount, savings}, dispatch] = useStateValue();
    if (cart.length == 0) history.push('/');

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await fetch(`http://localhost:5001/amzon-react-clone/us-central1/api/payment/create?total=${subtotal * 100}`, {
                method: "POST",
            }).then(res => res.json());
            
            // console.log(response)
            setClientSecret(response.clientSecret);
        }
        getClientSecret();
        dispatch(applyDiscount());
    }, [cart])

    useEffect(() => {
        dispatch(applyDiscount());
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        // call stripe API to charge user on sumit Buy Now login__button
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.paymentIntent) {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // empty cart on successful paymentIntent
            dispatch(emptyCart());
            
            history.replace('orders'); //redirect to orders page
        }
        setError("Payment not proceed. Please try again");
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }
    
    return (
        <>
            <Banner text="Wohoh! You saved 20% on this purchase." color="green" />
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
                                            return (
                                                <>                                                    
                                                    <h3>Order Total: {value} <span>(<strike>${subtotal}</strike> 20% discount applied)</span></h3>                    
                                                    <p>Your Savings: ${savings}</p>
                                                </>
                                            )
                                        }}
                                        decimalScale={2}
                                        value={subtotal_after_discount}
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
                    {/* Review Items */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items</h3>
                        </div>
                        <div className="payment__items">
                            {cart.map((item, i) => {
                                return <CartItem
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            } )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
