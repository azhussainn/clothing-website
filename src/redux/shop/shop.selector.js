import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollectionViaId = memoize((collectionsUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections[collectionsUrlParam]
))