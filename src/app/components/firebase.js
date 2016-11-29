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
