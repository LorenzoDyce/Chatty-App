A single page app that uses React, Websockets, Webpack and Babel for multi-user real-time updates. No database is involved in this app; the focus is on the client-side experience.

### Getting Started

### Usage

1. Clone this repo and create your own git repo.

```
git clone https://github.com/LorenzoDyce/Chatty-App.git
$ cd into ChattyApp
$ npm install
$ cd into chatty_server
$ npm install
```

2. Start and run the application:

```
$ cd into ChattyApp and run 'npm start'
$ cd into chatty_server and run 'npm start'
$ open browser to http://localhost:3000
```

> The webpack may take some time to compile;

> The application default websocket server address is _ws://localhost:3001_;

## Final Product

!["chatty"](https://github.com/LorenzoDyce/Chatty-App/blob/master/docs/Screen%20Shot%202018-10-04%20at%2011.04.55%20PM.png?raw=true)

### Dependencies

- babel-core
- babel-loader

- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom
