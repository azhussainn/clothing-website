import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomButton from '../custom-button/custom-button.components'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import "./cart-dropdown.styles.scss"

const CartDropDown = ({ cartItems, history, dispatch  }) => {

    const handleClick = () => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }

    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item} 
                    />
                ))
                :
                <span
                    className='empty-message'
                >Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={handleClick}
        >GO TO CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(
    connect(mapStateToProps)(CartDropDown)
    )