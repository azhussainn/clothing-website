import React from 'react'
import {withRouter} from 'react-router-dom'
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    Title,
    SubTitle
} from './menu-item.styles'

const MenuItem = (
    {title, imageUrl, size, history, match, linkUrl}) =>
    (
    <MenuItemContainer size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className="background-image"
            imageUrl={imageUrl}
        />
        <ContentContainer>
            <Title>{title}</Title>
            <SubTitle>SHOP NOW</SubTitle>
        </ContentContainer>
    </MenuItemContainer>
)


export default withRouter(MenuItem)