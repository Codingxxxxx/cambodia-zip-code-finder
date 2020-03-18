import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import store from './createStore';
import {Provider} from 'react-redux';
import {checkServerConnection} from './api/auth.api';
import ServerErrorPrompt from './component/server-error-prompt/server-error-prompt.component';

checkServerConnection().then((responseJson) => {
   ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}).catch((error) => {
   // handle server is error.
   ReactDOM.render(<ServerErrorPrompt />, document.getElementById('root'));
});
