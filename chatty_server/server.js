const express = require('express');
const SocketServer = require('ws');
const uuidv4 = require('uuid/v4');

// Sets the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

//
wss.on('connection', ws => {
  const connectObject = {
    type: 'usersOnline',
    userCount: wss.clients.size
  };
  wss.clients.forEach(client => {
    client.send(JSON.stringify(connectObject));
  });

  //
  ws.on('message', data => {
    const dataObject = JSON.parse(data);
    dataObject.uniqueId = uuidv4();
    switch (dataObject.type) {
      case 'postNotification':
        dataObject.type = 'incomingNotification';
        break;
      case 'postMessage':
        dataObject.type = 'incomingMessage';
        break;
    }

    //
    wss.clients.forEach(client => {
      if (client.readyState === SocketServer.OPEN) {
        client.send(JSON.stringify(dataObject));
      }
    });
  });

  //
  ws.on('close', () => {
    const disconnectObject = {
      type: 'usersOnline',
      size: wss.clients.size
    };

    wss.clients.forEach(client => {
      client.send(JSON.stringify(disconnectObject));
    });
  });
});
