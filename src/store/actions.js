import { SET_USER } from './action_types';

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