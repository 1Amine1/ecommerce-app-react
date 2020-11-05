import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../store/StateProvider';

import './Subtotal.css';


export const Subtotal = ({ subtotal, numberOfItems }) => {
    const history = useHistory();
    // const [{ cart, subtotal}] = useStateValue();
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
            <button className="subtotal__checkout_btn btn" disabled={subtotal <=0 ? true : false} onClick={(e) => history.push("/payment")}>
                Proceed to Payment
            </button>
        </div>
    );
}
