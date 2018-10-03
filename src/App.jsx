import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          id: 1
        },
        {
          username: 'Anonymous',
          content:
            'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id: 2
        }
      ]
    };
  }

  onMessageSubmit = content => {
    const message = {
      id: this.state.messages.length + 2,
      username: this.state.currentUser.name,
      content: content
    };
    const messages = this.state.messages.concat(message);

    this.setState({ messages: messages });
  };

  componentDidMount() {

    console.log('componentDidMount <App />');
    const Socket = new WebSocket("ws://localhost:3001");
    Socket.onopen = function (event) {
  Socket.send(console.log("Connected to Server!")); 
};
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
  


      const newMessage = {
        id: 3,
        username: 'Michelle',
        content: 'Hello there!'
      };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
    }, 3000);
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          onMessageSubmit={this.onMessageSubmit}
        />
      </div>
    );
  }
}

export default App;