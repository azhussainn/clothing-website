import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import {

    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles'


const Header = ({ currentUser, hidden }) => {


    const handleSignOut = () => {
        auth.signOut()
    }


    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink
                    as='div'
                    onClick={handleSignOut}
                >
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink
                    to='/signIn'
                >
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !hidden &&
                <CartDropDown />
        }
    </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector(
        {
            currentUser : selectCurrentUser,
            hidden : selectCartHidden
        })

export default connect(mapStateToProps)(Header)