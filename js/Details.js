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
          <h1>{Status}</h1>
          <h1>{ETD}</h1>
        </section>
      </div>
    )
  }
})

export default Details
