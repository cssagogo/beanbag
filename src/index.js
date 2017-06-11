import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDn_k6L0pjtAWW9hdVMdCjaSoYTzM8t_kU",
    authDomain: "beanbag-63ee9.firebaseapp.com",
    databaseURL: "https://beanbag-63ee9.firebaseio.com",
    projectId: "beanbag-63ee9",
    storageBucket: "beanbag-63ee9.appspot.com",
    messagingSenderId: "154257028162"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
