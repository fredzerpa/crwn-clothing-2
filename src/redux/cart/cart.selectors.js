import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    },
        0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        const { quantity, price } = cartItem;
        return acc + quantity * price
    },
        0)
)