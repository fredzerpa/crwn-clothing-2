import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections, match }) => (
    <div className='collections-overview'>
        {
            collections.map(collection => (
                <CollectionPreview
                    key={collection.id}
                    collection={collection}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionsOverview);