import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="https://github.com/ErnestoDLS/3.4-to-do-list">Todo List</NavLink></li>
          <li><NavLink to="https://github.com/ErnestoDLS/2.4---Calculator">Calculator</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
