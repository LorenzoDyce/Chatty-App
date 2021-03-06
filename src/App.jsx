import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
      currentUser: { name: '' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }
  // handles user name change
  handleNameChange = name => {
    const serverMessage = `${
      this.state.currentUser.name
    } Anonymous change their name to ${name}`;
    const message = {
      content: serverMessage,
      type: 'postNotification'
    };

    this.socket.send(JSON.stringify(message));
    this.setState({ currentUser: { name: name } });
  };
  // handles user message submission
  onMessageSubmit = content => {
    const message = {
      username: this.state.currentUser.name,
      content: content,
      type: 'postMessage'
    };

    this.socket.send(JSON.stringify(message));
  };

  componentDidMount() {
    // handle server messages
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = event => {
      console.log('Connected to Server!');
    };
    this.socket.onmessage = event => {
      const newMessage = JSON.parse(event.data);
      const messages = this.state.messages.concat(newMessage);
      // handles incoming data
      switch (newMessage.type) {
        case 'incomingMessage':
          this.setState({ messages: messages });
          break;
        case 'usersOnline':
          console.log(newMessage);
          this.setState({ userCount: newMessage.userCount });
          break;
        case 'incomingNotification':
          this.setState({ messages: messages });
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error('Unknown event type ' + newMessage.type);
      }

      this.setState({ messages: messages });
    };
  }

  render() {
    return (
      <div>
        <NavBar userCount={this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          onMessageSubmit={this.onMessageSubmit}
          onNameChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default App;
