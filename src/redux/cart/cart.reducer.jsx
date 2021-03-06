import CartActionTypes from "./cart.types";
import { addItemToCart, clearItemToCart, removeItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM: {
            return {
                ...state,
                items: removeItemToCart(state.items, action.payload)
            }
        }
        case CartActionTypes.CLEAR_CART_ITEM: {
            return {
                ...state,
                items: clearItemToCart(state.items, action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;