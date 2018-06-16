// var Rebase = require('re-base');
// var firebase = require('firebase');
// import Rebase from './re-base';
// import firebase from '../re-base/node_modules/firebase/app';
// import 'firebase/database';
import Rebase from 're-base'
import firebase from 'firebase'

// var app = firebase.initializeApp({ 
//     apiKey: "AIzaSyASjpPI_5TxmB_PyOW9zAXaTDQJY8EvYXY",
//     authDomain: "retrack-2c47a.firebaseapp.com",
//     databaseURL: "https://retrack-2c47a.firebaseio.com",
//     projectId: "retrack-2c47a",
//     storageBucket: "retrack-2c47a.appspot.com",
//     messagingSenderId: "660367147167"
// });

const config = {
    apiKey: "AIzaSyASjpPI_5TxmB_PyOW9zAXaTDQJY8EvYXY",
    authDomain: "retrack-2c47a.firebaseapp.com",
    databaseURL: "https://retrack-2c47a.firebaseio.com",
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
// var base = Rebase.createClass(app.database());

export default {base};