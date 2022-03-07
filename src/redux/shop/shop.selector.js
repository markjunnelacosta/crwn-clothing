import { createSelector } from "reselect";

export const selectShop = state => state.shop;
export const selectShopCollection = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollection],
        colllections => colllections[collectionUrlParam]
    )


export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)