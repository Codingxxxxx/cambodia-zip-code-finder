import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import store from './createStore';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));