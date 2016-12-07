import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowOrder = React.createClass({
  propTypes: {
    ClientName: string,
    ClientOrder: string,
    Status: string,
    ETD: string
  },
  render () {
    const { ClientName, ClientOrder, Status, ETD } = this.props
    return (
      <Link to={`/details/${ClientOrder}`}>
        <div className='show-order'>
          <h1>{ClientName}</h1>
          <h3>Status: {Status}</h3>
          <h3>Estimated delivery: {ETD}</h3>
        </div>
      </Link>
    )
  }
})

export default ShowOrder
