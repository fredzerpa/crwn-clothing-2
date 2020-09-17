import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { shop_data } from './data';
import './Shop.scss';

class Shop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collections: shop_data
        }
    }

    render() {

        const { collections } = this.state;

        return (
            <div className='shop-page'>
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
    }
}

export default Shop;