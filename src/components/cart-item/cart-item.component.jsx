import React from "react"
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemSpan

} from './cart-item.styles'

const CartItem = (
    {item :  {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <CartItemSpan>{name}</CartItemSpan>
            <CartItemSpan>
                {quantity} x ${price}
            </CartItemSpan>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem