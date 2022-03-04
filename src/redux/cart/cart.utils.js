export const addItemToCart = (cartItems, item) => {
    const isExisting = cartItems.find(i => item.id === i.id);

    if (isExisting) {
        return cartItems.map(cartItem => cartItem.id === item.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem)
    } else {
        return [...cartItems, {...item, quantity: 1}];
    }
}