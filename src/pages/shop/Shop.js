import React from 'react';
import Category from '../category/Category';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom';
import './Shop.scss';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverview}
        />
        <Route
            exact
            path={`${match.path}/:categoryId`}
            component={Category}
        />
    </div>
)


export default Shop;