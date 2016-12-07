import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back to orders
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>BR</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string,
}

export default Header
