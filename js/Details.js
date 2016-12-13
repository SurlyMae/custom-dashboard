import React from 'react'
import Header from './Header'
const { shape, string, number } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    order: shape({
      ClientName: string,
      ClientOrder: string,
      GarmentType: string,
      Fabric: string,
      Status: string,
      ETD: string,
      Store: number
    })
  },
  render () {
    const { ClientName, ClientOrder, GarmentType, Fabric, Status, ETD, Store } = this.props.order
    return (
      <div className='details'>
        <Header />
        <section>
          <div className='order-details'>
            <h2>Name: {ClientName}</h2>
            <h2>Order #: {ClientOrder}</h2>
            <h2>Garment Type: {GarmentType}</h2>
            <h2>Fabric: {Fabric}</h2>
            <h2>Status: {Status}</h2>
            <h2>Estimated delivery: {ETD}</h2>
          </div>
          <div className='store-contact'>
            <h2>Questions? <br /> Contact your store: {Store}</h2>
          </div>
          <div className='visual'>
            <img src='../public/images/AntlerLogoWT.png' />
            <h1 className='chart'>Data visualization will go here</h1>
          </div>
        </section>
      </div>
    )
  }
})

export default Details
