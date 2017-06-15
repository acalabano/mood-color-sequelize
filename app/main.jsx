'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import Root from './components/Root';
import Home from './components/Home';
import AllPixelsContainer from './containers/AllPixelsContainer';
import SinglePixelContainer from './containers/SinglePixelContainer';
import AddPixelContainer from './containers/AddPixelContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="pixels" component={AllPixelsContainer} />
        <Route path="pixel/:id" component={SinglePixelContainer} />
        <Route path="pixels/add" component={AddPixelContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
