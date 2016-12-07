import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import * as firebase from 'firebase'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/styles.css'

var config = {
  apiKey: 'AIzaSyAkTKPZgutk9faqPy-ZgP2K3B2ZjWD6sO8',
  authDomain: 'custom-dashboard-1db53.firebaseapp.com',
  databaseURL: 'https://custom-dashboard-1db53.firebaseio.com',
  storageBucket: 'custom-dashboard-1db53.appspot.com',
  messagingSenderId: '900591473060'
}

firebase.initializeApp(config)
// const dbRef = firebase.database().ref()
// const dbOrders = dbRef.child('orders')
// console.log('firebase data: ', dbRef);

const App = React.createClass({

  componentDidMount () {
    const dbRef = firebase.database().ref()
    const dbOrders = dbRef.child('orders')
    dbOrders.on('value', snap => {
      console.log(snap.val())
      this.setState({
        order: snap.val()
      })
    })
  },
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search orders={dbRef.orders} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const orders = dbRef.orders.filter((order) => props.params.id === order.ClientOrder)
              return <Details order={orders[0]} {...props} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
