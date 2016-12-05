import React from 'react'
import ShowOrder from './ShowOrder'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    orders: arrayOf(shape({
      ClientName: string,
      ClientOrder: string
    }))
  },
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
        {this.props.orders.filter((order) => {
          return `${order.ClientName} ${order.ClientOrder}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
        })
        .map((order) => {
          return (
            <ShowOrder key={order.ClientOrder} {...order} />
          )
        })}
      </div>
    )
  }
})

export default Search
