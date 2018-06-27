import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
        <li><a href="/react" onClick={navigateToUrl}>React</a></li>
        {/* Note that we still need to build our AngularJS App before this link will work */}
        <li><a href="/angular1" onClick={navigateToUrl}>Angular1</a></li>
      </ul>
    </div>
  </nav>
)

export default NavBar