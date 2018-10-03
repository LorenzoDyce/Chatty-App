import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }

  handleChange = event => {
    this.setState({ currentUser: { name: event.target.value } });
  };

  onMessageSubmit = content => {
    const message = {
      username: this.state.currentUser.name,
      content: content
    };

    this.socket.send(JSON.stringify(message));
    // const messages = this.state.messages.concat(message);

    // this.setState({ messages: messages });
  };

  componentDidMount() {
    console.log('componentDidMount <App />');
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = event => {
      console.log('Connected to Server!');
    };
    this.socket.onmessage = event => {
      console.log(JSON.parse(event.data));
      const newMessage = JSON.parse(event.data);
      const messages = this.state.messages.concat(newMessage);

      this.setState({ messages: messages });
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          onMessageSubmit={this.onMessageSubmit}
          onNameChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
