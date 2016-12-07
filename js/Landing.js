import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Welcome</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>Check your order status</Link>
      </div>
    )
  }
})

export default Landing
