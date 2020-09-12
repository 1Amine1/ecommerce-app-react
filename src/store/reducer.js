import { ADD_TO_CART, REMOVE_FROM_CART, PROCESSED_TO_CHECKOUT } from './action_types';

export const initialState = {
    cart: [],
    subtotal: 5000,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.item],
            };            
        }
            
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.itemId),
            };            
        }
            
        default:
            return state;
    }
};