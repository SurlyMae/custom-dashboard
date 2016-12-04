import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowOrder = React.createClass({
  propTypes: {
    ISupplyOrder: string,
    ClientName: string,
    ClientOrder: string,
    Status: string,
    ETD: string
},
  render () {
    return (
      <div className='show-order'>
        <h3>{this.props.ClientOrder}</h3>
        <h3>{this.props.Status}</h3>
        <h3>{this.props.ETD}</h3>
      </div>
    )
  }
})

export default ShowOrder
