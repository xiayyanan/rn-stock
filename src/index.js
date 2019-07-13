import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import api from '@/http/api.js'
React.Component.prototype.$api = api;
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();