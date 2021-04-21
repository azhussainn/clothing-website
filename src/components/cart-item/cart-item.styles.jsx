import styled from 'styled-components'

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`
export const ItemDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const CartItemSpan = styled.span`
    font-size: 16px;
`