// import { googleProvider, base }  from './constants'
import firebase from 'firebase';
import base from './../components/fb_init';
export const googleProvider = new firebase.auth.GoogleAuthProvider();
const user = firebase.auth().currentUser;
var faker = require('faker');

/*
  This module encompasses all of the user authorization functionality in the application.  It handles login through google Authentication.
 */
 
export function auth (email, pw) {
  return base.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
    .then((data) => {
      console.log("data is", data);
      saveUser(data);
    })
}

export function logout () {
  return base.initializedApp.auth().signOut()
}

export function login (email, pw) {
  return base.initializedApp.auth().signInWithEmailAndPassword(email, pw)
}

export function loginWithGoogle () {
  return base.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    console.log('userdata', data);
    saveUser(data.user);
  })
}

export function resetPassword (email) {
  return base.initializedApp.auth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  console.log("save user", user);
  return base.initializedApp.database().ref().child(`users`)
    .update({
      email: faker.name.email(), //user.email,
      uid: faker.random.uuid(), //user.uid,
      displayName: faker.name.findName() //additionalUserInfo.profile.given_name
    })
    .then(() => {

      return user;
    })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    
  } else {
    // User is signed out.
   console.log("no user logged in..."); // ...
  }
});
