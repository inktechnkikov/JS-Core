import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';

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
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <Route path="catalog" component={Catalog}/>
        <Route path="about" component={About}/>
            </Route>
        </Router>,
    document.getElementById('root')
);
