// import React from 'react'
// import { render } from 'react-dom'
// import * as firebase from 'firebase'
//
// var config = {
//   apiKey: 'AIzaSyAkTKPZgutk9faqPy-ZgP2K3B2ZjWD6sO8',
//   authDomain: 'custom-dashboard-1db53.firebaseapp.com',
//   databaseURL: 'https://custom-dashboard-1db53.firebaseio.com',
//   storageBucket: 'custom-dashboard-1db53.appspot.com',
//   messagingSenderId: '900591473060'
// }
//
// firebase.initializeApp(config)
//
// class TestApp extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       order: ''
//     }
//   }
//
//   componentDidMount() {
//     const dbRef = firebase.database().ref()
//     const dbOrders = dbRef.child('orders')
//     dbOrders.on('value', snap => {
//       console.log(snap.val())
//       this.setState({
//         order: snap.val()
//       })
//     })
//   }
//
//   render () {
//     return (
//       <div className='app'>
//         <h1>{this.state.order}</h1>
//       </div>
//     )
//   }
// }
