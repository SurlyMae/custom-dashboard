import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <div className='details'>
        <h1>order details will go here</h1>
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
})

export default Details
