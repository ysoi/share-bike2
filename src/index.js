//路由文件
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

import App from './App';
import './style/common.less';

ReactDOM.render(
    <App>
        <Router/>
    </App>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

