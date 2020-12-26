import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import './Order.css'

export const Order = ({order}) => {
    return (
        <div className="order__card">
            <p>date</p>
            <p className="order__id"><small>Transaction ID: {order.id} </small></p>
            {order.data.items?.map(item => (
                <CartItem
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hideRemoveCartButton={true}
                />
            ))}
            <hr />
            <h3 className="order__total">Order Total: ${order.data.amount / 100}</h3>
            {/* <p>Your Savings: ${order.data.savings} </p> */}
            
        </div>
    );
};

