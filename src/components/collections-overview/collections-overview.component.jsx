import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { CollectionsOverviewContainer } from './collection-overview.styles'

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {
        collections.map(({id, ...restProps}) => (
            <CollectionPreview key={id} {...restProps}/>
        ))
        }
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)

