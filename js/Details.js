import React from 'react'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    order: shape({
      ClientOrder: string,
      Status: string,
      ETD: string
    })
  },
  render () {
    const { ClientOrder, Status, ETD } = this.props.order
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{ClientOrder}</h1>
          <h2>{Status}</h2>
          <h2>{ETD}</h2>
        </section>
      </div>
    )
  }
})

export default Details
