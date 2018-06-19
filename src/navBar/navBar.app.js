import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBar from './root.component.js';

export const navBar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
  domElementGetter,
})

// Finally, we specify the location we want single-spa to mount our application
function domElementGetter() {
  return document.getElementById("navBar")
}
