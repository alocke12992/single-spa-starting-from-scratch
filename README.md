# Starting from Scratch with single-spa

## Project Overview

This repository contains the completed code for this [tutorial](https://single-spa.js.org/docs/starting-from-scratch.html).

single-spa allows you to build micro frontends that coexist and can each be written with their own framework. This will allow you and your team to:

1) Use multiple frameworks on the same page. [see the single-spa ecosystem for more info](https://single-spa.js.org/docs/ecosystem.html#docsNav)
2) Write code using a new framework, without rewriting your existing application
3) [Lazy load](https://en.wikipedia.org/wiki/Lazy_loading) code for improved initial load time.

Single-spa can be used with just about any build system or javascript framework, but this tutorial will focus on creating a web app with [Webpack](https://webpack.js.org/), [React](https://reactjs.org/), and [AngularJS](https://angularjs.org/). Our tutorial puts everything into a single code repository, but it is also possible to have [separate code repositories](https://single-spa.js.org/docs/separating-applications.html#option-3-dynamic-module-loading) for each of your applications.

<!-- NOTE the links to additional tutorials will be updated as they are written -->
If you'd like to learn how to use single-spa with Angular 2+, Vue, or other frameworks, [try these tutorials](https://github.com/CanopyTax/single-spa-examples). And if you'd rather use a different build system instead of webpack, check out [this tutorial](https://github.com/me-12/single-spa-portal-example)

You can find the [code for this tutorial](https://github.com/alocke12992/single-spa-simple-example). Read more about [separating applications](https://single-spa.js.org/docs/separating-applications.html) using single-spa.

Be sure to read through the [single-spa docs](https://single-spa.js.org/), check the [single-spa github](https://github.com/CanopyTax/single-spa) and the [help section](https://single-spa.js.org/help.html) for more support.

## Project Set up

```bash
git clone git@github.com:alocke12992/single-spa-starting-from-scratch.git
cd single-spa-starting-from-scratch
yarn
yarn start
```

## Tutorial

Check out the [Starting From Scratch](https://single-spa.js.org/docs/starting-from-scratch.html) tutorial for this project on the [single-spa](https://single-spa.js.org/) website.