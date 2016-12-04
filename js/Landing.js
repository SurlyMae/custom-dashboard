import React from 'react'
import Search from './Search'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Landing Page</h1>
        <Search />
      </div>
    )
  }
})

export default Landing
