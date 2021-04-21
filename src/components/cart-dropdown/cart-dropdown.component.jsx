import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessageSpan,
    CartDropdownButton
} from './cart-dropdown.styles'



const CartDropDown = ({ cartItems, history, dispatch  }) => {

    const handleClick = () => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }

    return(
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item} 
                    />
                ))
                :
                <EmptyMessageSpan>
                    Your Cart Is Empty
                </EmptyMessageSpan>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={handleClick}
        >GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropDownContainer>
)}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(
    connect(mapStateToProps)(CartDropDown)
    )