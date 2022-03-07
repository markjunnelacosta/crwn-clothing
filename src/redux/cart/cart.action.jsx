import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeItemToCart = (item) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const clearItemToCart = (item) => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
});