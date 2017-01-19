import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavbarContainer from './containers/NavbarContainer';
import ProductsListContainer from './containers/ProductsListContainer';

export default(
    <Route path="/" component={NavbarContainer}>
        <IndexRoute component={ProductsListContainer} />
    </Route>
);