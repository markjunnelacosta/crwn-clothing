import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((accum, item) => {
        return accum + item.quantity;
    }, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (items) => items.reduce((accum, item) => {
        return accum + (item.quantity * item.price);
    }, 0)
)