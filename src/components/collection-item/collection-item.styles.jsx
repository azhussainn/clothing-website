import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.components'

export const CollectionItemContainer = styled.div`
    width: 21vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-right: 3%;

    &:hover{
        .image{
          opacity: 0.8;
        }
        button{
          opacity: 0.85;
          display: flex;
        }
      }
`
export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image : ${ ( {imageUrl} ) => `url(${imageUrl})`  }
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionItemSpanName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const CollectionItemSpanPrice = styled.span`
    width: 10%;
    text-align: right;
`