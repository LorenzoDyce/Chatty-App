import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  // Sends an object of new messages to onMessageSubmit function
  MessageHandler = event => {
    if (event.key === 'Enter') {
      this.props.onMessageSubmit(event.target.value);
    }
  };
  // handle user field change
  NameHandler = event => {
    if (event.key === 'Enter') {
      this.props.onNameChange(event.target.value);
    }
  };

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Please Enter Name)"
          defaultValue={this.props.currentUser}
          onKeyPress={this.NameHandler}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.MessageHandler}
        />
      </footer>
    );
  }
}

export default ChatBar;
