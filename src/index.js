import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import ArtListing from './ArtListing';
import Art from './Art';
import PageNotFound from './PageNotFound';


ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={ArtListing} />
  <Route path="/arts/:artId" component={Art}/>
  <Route path="*" component={PageNotFound}/>
  </Route>
  </Router>
), document.getElementById('root'));
