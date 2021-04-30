import React, { useEffect, useState } from 'react';
import Order from './Order/Order';
import { Container } from '@material-ui/core';
import { withAuth } from '../../hotel-context';
import firebase from '../../firebase';


const Orders = (props) => {

    const [orders, setOrders] = useState([]);

    //const userId = "x05lx47eg1NrePRIiexEuvkBcBA2";
    useEffect(() => {
        const data = firebase.database().ref('orders/').orderByChild('userId').equalTo(props.userId).once('value', (snap) => {
            console.log(snap.val());
            const data = snap.val();
            const fetchOrders = [];
            for (let key in snap.val()) {
                fetchOrders.push({
                    ...data[key],
                    id: key
                });
                setOrders(fetchOrders)
            }
        });
        return () => {
            data();
        }
    }, [props.userId]);

    return (
        <Container>
            {
                orders && orders.map(order => {
                    return <Order key={order.id} order={order} />
                })
            }
        </Container>
    );
}
export default withAuth(Orders);