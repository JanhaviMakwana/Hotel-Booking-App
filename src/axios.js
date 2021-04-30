import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hotel-booking-5fd1f-default-rtdb.firebaseio.com/'
});

export default instance;