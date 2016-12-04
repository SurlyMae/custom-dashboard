import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match} from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/comps.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))