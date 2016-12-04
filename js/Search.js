import React from 'react'
import preload from '../public/orders.json'
import ShowOrder from './ShowOrder'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <h1>Search here</h1>
        <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placedholder='Enter order number' />
        {preload.orders.filter((order) => {
          return `${order.ClientName} ${order.ClientOrder}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
        })
        .map((order) => {
          return (
            <ShowOrder key={order.ISupplyOrder} {...order} />
          )
        })}
      </div>
    )
  }
})

export default Search
