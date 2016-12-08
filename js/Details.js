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
            <h1>Name: {ClientName}</h1>
            <h1>Order #: {ClientOrder}</h1>
            <h1>Garment Type: {GarmentType}</h1>
            <h1>Fabric: {Fabric}</h1>
            <h1>Status: {Status}</h1>
            <h1>Estimated delivery: {ETD}</h1>
          </div>
          <div className='store-contact'>
            <h1>Questions? Contact your store: {Store}</h1>
          </div>
        </section>
      </div>
    )
  }
})

export default Details
