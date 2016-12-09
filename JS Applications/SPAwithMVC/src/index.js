import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IndexRoute ,Router, Route, browserHistory} from 'react-router';
import Catalog from './components/catalog/CatalogPage';
import About from './components/about/AboutPage';
import Register from './components/register/RegisterPage';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="catalog" component={Catalog}/>
            <Route path="about" component={About}/>
            <Route path="register" component={Register}/>
            </Route>
        </Router>,
    document.getElementById('root')
);
