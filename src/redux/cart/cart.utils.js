export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ))
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const toReturn = [];

    cartItems.forEach(cartItem => {
        cartItem.quantity !== 1 ? (
            cartItem.id === cartItemToRemove.id
                ? toReturn.push({ ...cartItem, quantity: cartItem.quantity - 1 })
                : toReturn.push(cartItem)
        ) : clearItemFromCart(cartItems, cartItemToRemove)
    })

    return toReturn;
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => (
        cartItem.id !== cartItemToClear.id
    ))
}