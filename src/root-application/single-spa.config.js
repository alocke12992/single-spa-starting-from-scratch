import { registerApplication, start } from 'single-spa';

registerApplication('navBar', () => import('../navBar/navBar.app.js'), () => true);
registerApplication('home', () => import('../home/home.app.js'), () => location.pathname === "" || location.pathname === "/");

start();