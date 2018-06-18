// home.app.js
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

export const homeApp = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter,
})

// Finally, we specify the location we want single-spa to mount our application
function domElementGetter() {
  return document.getElementById("home")
}

