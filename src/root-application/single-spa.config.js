
import { registerApplication, start } from 'single-spa';

registerApplication('navBar', () => import('../navBar/navBar.app.js'), () => true);
registerApplication('home', () => import('../home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('angular1', () => import('../angular1/angular1.app.js'), pathPrefix('/angular1'));

start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}