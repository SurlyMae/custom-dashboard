'use strict';

var config = {
  apiKey: "AIzaSyAkTKPZgutk9faqPy-ZgP2K3B2ZjWD6sO8",
  authDomain: "custom-dashboard-1db53.firebaseapp.com",
  databaseURL: "https://custom-dashboard-1db53.firebaseio.com",
  storageBucket: "custom-dashboard-1db53.appspot.com",
  messagingSenderId: "900591473060"
};
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

dbRef.on('value', function(snap) {
  console.log(snap.val())
});

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
  // TODO: check for real email
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnLogout.classList.add('hide');
  }
});

function getName () {
  let name = document.getElementById('nameSearch').value;
  console.log(name);;
}

function getNumber () {
  let number = document.getElementById('numberSearch').value;
  console.log(number);;
}
