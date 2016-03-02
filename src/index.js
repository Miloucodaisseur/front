import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
// import App from './App';
// import ArtListing from './ArtListing';
// import Art from './Art';
// import PageNotFound from './PageNotFound';
//
// ReactDOM.render(()
//   <Router history={browserHistory}>
//   <Route path="/" component{App}>
//   <IndexRoute component={ArtListing} />
//   <Route path="/art/:artId" component={Art}/>
//   <Route path="*" component={PageNotFound}/>
//   </Route>
//   </Router>
// ), document.getElementById('root'));
