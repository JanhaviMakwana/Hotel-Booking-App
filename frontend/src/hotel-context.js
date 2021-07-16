import { createContext, useReducer } from 'react';
import reducer, { initialState } from './store/reducer/index';

const HotelContext = createContext();


const Store = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HotelContext.Provider value={{ state, dispatch }}>
            {props.children}
        </HotelContext.Provider>
    );
};

const withState = (Child) => (props) => (
    <HotelContext.Consumer>
        {(context) => <Child {...props}  {...context} />}
    </HotelContext.Consumer>
);

export { Store, withState };
