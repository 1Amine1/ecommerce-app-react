import moment from 'moment';
import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import './Order.css'

export const Order = ({order}) => {
    return (
        <div className="order__card">
            <p>Purchased date: {moment.unix(order.data.created).format("MM/DD/YYYY, h:mma")}</p>
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
            <div className="order__total">
                <p>Order Total: ${order.data.amount / 100}</p>
                {/* <p>Discount: &nbsp;&nbsp;&nbsp;${order.data?.savings}</p>
                <p>Final Total: ${order.data?.actual_amount}</p> */}
            </div>
            
        </div>
    );
};

