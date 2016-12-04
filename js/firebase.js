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
  nameQuery(name);
};

function getNumber () {
  let number = document.getElementById('numberSearch').value;
  numberQuery(number);
}

function nameQuery (name) {
  const query = dbRef
                .orderByChild('ClientName')
                .equalTo(name)
                .limitToFirst(10);

  query.on("value", function(snapshot) {
    let nameObj = snapshot.val();
    getProperties(nameObj);
  });
};

function numberQuery (number) {
  const query = dbRef
                .orderByChild('ClientOrder')
                .equalTo(number)
                .limitToFirst(10);

  query.on("value", function(snapshot) {
    let numberObj = snapshot.val();
    getProperties(numberObj);
  });
};

const htmlResults = document.getElementById('results');

function getProperties (obj) {
  Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
    let orderResult = obj[val].ClientOrder;
    let statusResult = obj[val].Status;
    let etdResult = obj[val].ETD;
    console.log(`Order #: ${orderResult}, Status: ${statusResult}, Estimated Delivery: ${etdResult}`);
  });
};
