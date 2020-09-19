import { cartActionsTypes } from './cart.types';

const { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM } = cartActionsTypes;

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: CLEAR_ITEM,
    payload: item
});