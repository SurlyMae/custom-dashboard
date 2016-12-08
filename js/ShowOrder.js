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
          <h3>{ClientName}</h3>
          <h4>Order #: {ClientOrder}</h4>
          <h4>{GarmentType}</h4>
        </div>
      </Link>
    )
  }
})

export default ShowOrder
