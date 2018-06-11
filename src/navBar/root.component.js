import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a onClick={() => navigateToUrl('/')} className="brand-logo">single-spa</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a onClick={() => navigateToUrl('/')}>Home</a></li>
        {/* Note that we still need to build our AngularJS App before this link will work */}
        <li><a onClick={() => navigateToUrl('/angular1')}>Angular1</a></li>
      </ul>
    </div>
  </nav>
)

export default NavBar