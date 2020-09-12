import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';


export const Subtotal = ({subtotal, numberOfItems}) => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(subtotal) => (
                    <>
                        <p>
                            Subtotal ({numberOfItems} items) : <strong>{`${subtotal}`}</strong>
                        </p>  
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                value={subtotal}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button className="subtotal__checkout_btn btn" onClick={() => window.confirm('Are you sure you want to proceed to checkout?')}>
                Proceed to Checkout
            </button>
        </div>
    );
}
