import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB0q9tcwelFeEODSfYwYTTc6DyiS9577M4",
    authDomain: "hotel-booking-5fd1f.firebaseapp.com",
    databaseURL: "https://hotel-booking-5fd1f-default-rtdb.firebaseio.com",
    projectId: "hotel-booking-5fd1f",
    storageBucket: "hotel-booking-5fd1f.appspot.com",
    messagingSenderId: "928973192609",
    appId: "1:928973192609:web:2162951f5a0ce1391d1fe0",
    measurementId: "G-D74TPC7P73"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;