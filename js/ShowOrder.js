import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowOrder = React.createClass({
  propTypes: {
    ClientName: string,
    ClientOrder: string,
    GarmentType: string
  },
  render () {
    const { ClientName, ClientOrder, GarmentType } = this.props
    return (
      <Link to={`/details/${ClientOrder}`}>
        <div className='show-order'>
          <h2>{ClientName}</h2>
          <h2>Order #: {ClientOrder}</h2>
          <h2>{GarmentType}</h2>
        </div>
      </Link>
    )
  }
})

export default ShowOrder
