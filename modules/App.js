import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ernesto De Los Santos</h1>
        <h2>San Antonio Texas</h2>
          <p>Insert Bio here</p>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Blog</NavLink></li>

          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
