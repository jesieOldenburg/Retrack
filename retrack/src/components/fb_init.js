import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyASjpPI_5TxmB_PyOW9zAXaTDQJY8EvYXY",
    authDomain: "retrack-2c47a.firebaseapp.com",
    databaseURL: "https://retrack-2c47a.firebaseio.com",
    projectId: "retrack-2c47a",
    storageBucket: "retrack-2c47a.appspot.com",
    messagingSenderId: "660367147167"
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());


export default base;