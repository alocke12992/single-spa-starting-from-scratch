import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';
import './app.module.js'
import './routes.js';

// domElementGetter is required by single-spa-angular1
const domElementGetter = () => document.getElementById('angular1');

const angularLifecycles = singleSpaAngular1({
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
