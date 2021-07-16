import { useEffect, useState } from 'react';
import { withState } from '../../hotel-context';
import OrderService from '../../services/order';
import { Container } from '@material-ui/core';
import Order from './Order/Order';
import { SET_ERROR } from '../../store/actionTypes';

const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    const userId = props.state.user.id;
    const {dispatch} = props;

    useEffect(() => {

        const fetchOrders = () => {
            OrderService.getAllOrders(userId)
                .then(res => {
                    setOrders(res);
                })
                .catch(err => {
                    dispatch({type: SET_ERROR, error: err.message});
                })
        }
        fetchOrders();
    }, [userId, dispatch])

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

export default withState(Orders);