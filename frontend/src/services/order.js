import axios from "../axios";

const OrderService = {
    createOrder: (userId, orderData) => {
        return axios.post(`/create-order/${userId}`, orderData)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    },
    getAllOrders: (userId) => {
        return axios.get(`/get-orders/${userId}`)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }
}

export default OrderService;