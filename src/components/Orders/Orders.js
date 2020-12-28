import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../store/StateProvider';
import { Header } from '../Header/Header';
import { Order } from './Order';
import './Orders.css';

export const Orders = () => {
    const [{ user, cart }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    console.log(user);
    useEffect(() => {
        if (!user) {
            setOrders([])
        }
        else {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        
    }, [user])

    console.log(orders);

    const userNotLoginRender = (
        <>
            <h5>Please login to view your past orders</h5>    
        </>
    )

    const showOrdersRender = (
        <>
            {orders.length > 0 ? orders.map( order => (
                <Order order={order}/>
            )) : <h5>You haven't purchase any order yet! Quickly add some items in your cart, make payment and come back here to see your past orders.</h5>}
        </>
    )

    return (
        <>
            <Header />
            <div className="orders">
                <h1> Your Orders </h1>
                <hr /> 
                <div className="orders__order">
                    {user ? showOrdersRender : userNotLoginRender}
                </div>
            </div>
        </>
    );
};

