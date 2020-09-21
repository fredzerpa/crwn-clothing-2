import React from 'react';
import Category from '../../pages/category/Category';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom';
import './Shop.scss';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route
            path={`${match.path}`}
            component={CollectionsOverview}
        />
        <Route
            path={`${match.path}/:categoryId`}
            component={Category}
        />
    </div>
)


export default Shop;