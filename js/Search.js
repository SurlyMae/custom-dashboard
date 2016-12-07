import React from 'react'
import { connect } from 'react-redux'
import ShowOrder from './ShowOrder'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    orders: arrayOf(shape({
      ClientName: string,
      ClientOrder: string
    })),
    searchTerm: string
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.orders
            .filter((order) => `${order.ClientName} ${order.ClientOrder}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
