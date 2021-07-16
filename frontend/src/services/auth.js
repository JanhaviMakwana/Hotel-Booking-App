import axios from "../axios";

const AuthService = {
    login: (loginData) => {
        return axios.post('/login', loginData)
            .then(({ data }) => {
                setHeaderAndStorage(data);
                return data.user;
            })
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    },
    signup: (signupData) => {
        return axios.post('/signup', signupData)
            .then(({ data }) => {
                setHeaderAndStorage(data);
                return data.user;
            })
            .catch(err => {
                throw new Error(err.response.data.message)
            });
    },
    getUserProfile: (userId) => {
        return axios.get(`/user/${userId}`)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data));
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message)
            });
    },
    updateUserProfile: (userId, userData) => {
        return axios.post(`/user/${userId}`, userData)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data));
                return data;
            })
            .catch(err => {
                throw new Error(err.response.data.message)
            });
    }
};


const setHeaderAndStorage = ({ user, token }) => {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

export default AuthService;