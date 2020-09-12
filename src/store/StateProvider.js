import React, { createContext, useContext, useReducer } from 'react';

// Prepare data Layer /store FROM NOW data layer === Store
export const StateContext = createContext();

// Wrap our app and provide data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// to get any data from the store (data layer) in any component
export const useStateValue = () => useContext(StateContext);