import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NavbarContainer from './containers/NavbarContainer';

export default(
    <Route path="/" component={NavbarContainer}>
        <IndexRoute component={App} />
    </Route>
);