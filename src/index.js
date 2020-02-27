import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configStore from "./redux/configStore";
import Routes from "./routes";

const store = configStore();
ReactDOM.render(
    <Provider store = {store}>
        <Router >
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
