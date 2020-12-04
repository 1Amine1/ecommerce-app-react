import { ADD_TO_CART, REMOVE_FROM_CART, PROCESSED_TO_CHECKOUT, SET_USER } from './action_types';

export const initialState = {
    cart: [],
    subtotal: 0,
    user: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user,
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.item],
                subtotal: state.subtotal + action.item.price,
            };            
        }
            
        case REMOVE_FROM_CART: {
            const index = state.cart.findIndex(
                (item) => item.id === action.itemId
            );

            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            }

            return {
                ...state,
                cart: newCart,
                subtotal: parseInt(state.subtotal) - parseInt(action.itemPrice),
            };

            // delete using filter if all products has unique id
            // return {
            //     ...state,
            //     cart: state.cart.filter((item) => item.id !== action.itemId),
            //     subtotal: state.subtotal - action.itemPrice,
            // };            
        }
            
        default:
            return state;
    }
};