import React from 'react'
import ShowOrder from './ShowOrder'
import Header from './Header'
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
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.orders
            .filter((order) => `${order.ClientName} ${order.ClientOrder}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((order) => {
              return (
                <ShowOrder key={order.ClientOrder} {...order} />
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default Search
