export const addItemToCart = (cartItems, item) => {
    const isExisting = cartItems.find(i => item.id === i.id);

    if (isExisting) {
        return cartItems.map(cartItem => cartItem.id === item.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem)
    } else {
        return [...cartItems, { ...item, quantity: 1 }];
    }
}

export const removeItemToCart = (cartItems, itemToRemove) => {
    const item = cartItems.find(i => itemToRemove.id === i.id);
    if (item) {
        if (item.quantity === 1) {
            return clearItemToCart(cartItems, item);
        } else {
            return cartItems.map(cartItem => cartItem.id === item.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 } :
                cartItem)
        }
    }

    return [...cartItems];
}

export const clearItemToCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}