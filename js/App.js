import React from 'react'
// import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/comps.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search orders={preload.orders} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const orders = preload.orders.filter((order) => props.params.id === order.ClientOrder)
              return <Details order={orders[0]} {...props} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

export default App
