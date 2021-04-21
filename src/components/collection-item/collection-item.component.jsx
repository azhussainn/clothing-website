import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

import {
    CollectionItemContainer,
    ImageContainer,
    AddButton,
    CollectionFooter,
    CollectionItemSpanName,
    CollectionItemSpanPrice

} from './collection-item.styles'



const CollectionItem = (
    {item, addItem}) => {

    const {imageUrl, name, price} = item
    return(
    <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl}/>
        <CollectionFooter>
            <CollectionItemSpanName>{name}</CollectionItemSpanName>
            <CollectionItemSpanPrice>${price}</CollectionItemSpanPrice>
        </CollectionFooter>
        <AddButton onClick={() => addItem(item)}
        inverted>ADD TO CART</AddButton>
    </CollectionItemContainer>
)}

const matchDispatchToProps= dispatch =>({
    addItem : item => dispatch(addItem(item))
})

export default connect(
    null, matchDispatchToProps)(CollectionItem)