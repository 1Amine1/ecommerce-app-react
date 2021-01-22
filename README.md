# E-commerce app using React

Complete full-stack e-commerce app built using ReactJS with includes core features such as buying an order, making an payment, seeing order history and login/singup. I build this project for fun and to learn React Context API and firebase. [click here](http://bit.ly/ecomm_app) to visit the project.

## Live Project Demo
http://bit.ly/ecomm_app

## Goal of the project
I've created this E-Commerce app by mimic the amazon styles and features where user can buy product, pay using their card and view their order history. The end goal is to learn CSS styling using BEM, integrating payment gateway and to learn auto deployment and no-SQL database by leveraging firebase features.

## Technology & Tools used
- Front-end
  - React.js
  - HTML5
  - CSS3
  - React Context API (for data management ~ alternative of Redux)
  - [React Tostify](https://www.npmjs.com/package/react-toastify) (to show notifications)
  - [React Router](https://www.npmjs.com/package/react-router-dom) (for routing in single page app)
  - Animations using [react-reveal](https://www.npmjs.com/package/react-reveal)
- Back-end
  - Node.js (deployed payment API as a cloud function)
  - Firebase
- Tools
  - Stripe (for payment gateway integration)
  - Firebase authentication
  - Firebase hosting
  - Firebase auto deployment
  - Firebae Firestore

## Outcomes
- Learned to intigrate payment gateway using Stripe to send/receive payments in any application or website.
- Setup auto deployment using firebase.
- Leared how to use animation effectively in React using third party libraries.
- Explore React Context API for state management in React app. 
- Learned how to setup authentication using firebase.
- Make a effective use of functional components and Hooks in React.
- Great experience of developing full-stack application

## My Thoughts and Experience after developing this project
- I highly suggests you to use React [Context API](https://reactjs.org/docs/context.html) in your project as an alternative of [Redux](https://redux.js.org/) or even if you want to learn Redux start with learning React Context first. It makes it easy for you to understand Redux.
- Payment integration is not that hard using Stripe. They providing great bunch of APIs and nice documentation for every payments related actions such as to charge user, refund user etc and great dashboard to track our sells progress. Go to [Stripe](https://stripe.com/en-ca) create your account, generate test API keys, and intigrate payment API in your next project. (for free!)
- Functional components and Hooks i.e useState, useEffect are really better and easy compared to Class components.
