// root-application/single-spa-config.js
import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  // Our loading function
  () => import('../home/home.app.js'),
  // Our activity function
  () => location.pathname === "" || location.pathname === "/"
);

start()