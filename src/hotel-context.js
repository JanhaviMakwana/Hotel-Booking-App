import React, { createContext, useState } from 'react';

const HotelContext = createContext();

const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState();
    return (
        <HotelContext.Provider value={{ isAuthenticated, setIsAuthenticated, userId,setUserId }}>
            {props.children}
        </HotelContext.Provider>
    );
};

const withAuth = (Child) => (props) => (
    <HotelContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </HotelContext.Consumer>
);

export { AuthProvider, withAuth };