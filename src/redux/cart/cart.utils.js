export const addItemToCart = (
    cartItems, cartItemsToAdd) => {
    const existingItem = cartItems.find(item => item.id ===cartItemsToAdd.id)
    if(existingItem){
        return cartItems.map(item => 
             item.id === existingItem.id ?
             {...item, quantity : item.quantity + 1} :
             item
            )
    }
    return [...cartItems, {...cartItemsToAdd, quantity : 1 }]
}

export const removeItemFromCart = (
    cartItems, cartItemToRemove) => {
    const quantity = cartItemToRemove.quantity
    if(quantity !== 1){
        return cartItems.map(item =>
            item.id === cartItemToRemove.id ?
            {...item, quantity : item.quantity - 1} :
            item
            )
    }
    return cartItems.filter(item =>
        item.id !== cartItemToRemove.id)
}