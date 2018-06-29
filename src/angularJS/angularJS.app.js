import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import './app.module.js'
import './routes.js';

// domElementGetter is required by single-spa-angularjs
const domElementGetter = () => document.getElementById('angularJS');

const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'angularJS-app',
  uiRouter: true,
  preserveGlobal: false,
})

export const bootstrap = [
  angularLifecycles.bootstrap,
];

export const mount = [
  angularLifecycles.mount,
];

export const unmount = [
  angularLifecycles.unmount,
];
