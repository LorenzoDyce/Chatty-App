import React, { Component } from 'react';

class ChatBar extends Component {
  keyPressHandler = event => {
    if (event.key === 'Enter') {
      this.props.onMessageSubmit(event.target.value);
      event.target.value = '';
    }
  };

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={this.props.currentUser}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.keyPressHandler}
        />
      </footer>
    );
  }
}

export default ChatBar;
