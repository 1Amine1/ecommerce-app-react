import { SET_USER, ADD_TO_CART, REMOVE_FROM_CART } from './action_types';

export const login = (userData) => {
    return {
        type: SET_USER,
        user: userData
    }
}

export const logout = () => {
    return {
        type: SET_USER,
        user: null
    }
}

export const addToCart = (id, title, price, image, rating) => {
    return {
        type: ADD_TO_CART,
        item: {
            id,
            title,
            price,
            image,
            rating
        }
    }
}

export const removeFromCart = (id, price) => {
    return {
        type: REMOVE_FROM_CART,
        itemId: id,
        itemPrice: price,
    }  
}
