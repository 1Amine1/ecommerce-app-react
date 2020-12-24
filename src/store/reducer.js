import { ADD_TO_CART, REMOVE_FROM_CART, PROCESSED_TO_CHECKOUT, SET_USER, EMPTY_CART, APPLY_DISCOUNT } from './action_types';
import data from '../data.json';

export const initialState = {
    products: data.products,
    cart: [],
    subtotal: 0,
    subtotal_after_discount: 0,
    savings: 0,
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

        case EMPTY_CART: 
            return {
                ...state,
                cart: []
            }
            
        case APPLY_DISCOUNT: {
            if (state.cart.length === 0) {
                return {
                    ...state,
                    savings: 0,
                    subtotal_after_discount: 0
                }
            }
            const savings = state.subtotal * data.discount / 100;
            const after_discount_price = state.subtotal - savings;
            return {
                ...state,
                savings,
                subtotal_after_discount: Math.round(after_discount_price)
            }
        }
            
        default:
            return state;
    }
};