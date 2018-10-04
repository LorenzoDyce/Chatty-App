import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  MessageHandler = event => {
    if (event.key === 'Enter') {
      this.props.onMessageSubmit(event.target.value);
      console.log('Sent a Message');
    }
  };

  NameHandler = event => {
    if (event.key === 'Enter') {
      this.props.onNameChange(event.target.value);
      console.log('Sent user an update');
    }
  };

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
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
