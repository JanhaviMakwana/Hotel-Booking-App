import axios from '../axios';

const HotelService = {
    addHotel: (hotelData) => {
        return axios.post('/add-hotel', hotelData)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    },
    getHotels: () => {
        return axios.get('/get-hotels')
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    },
    getHotelById: (hotelId) => {
        return axios.get(`/hotel/${hotelId}`)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }
}

export default HotelService;