//路由文件
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import store from "./redux/store";
import App from './App';
import './style/common.less';
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router/>
        </App>
    </Provider>
    
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

