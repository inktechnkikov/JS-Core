import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

let Catalog = React.createClass({
    render:function () {
       return <div>Catalog Page</div>;
    }
});
let About = React.createClass({
   render:function () {
       return <div>About Page</div>;
   }
});
let Home = React.createClass({
   render:function () {
       return <div>Home Page</div>
   }
});
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        <Route path="catalog" component={Catalog}/>
        <Route path="about" component={About}/>
            </Route>
        </Router>,
    document.getElementById('root')
);
