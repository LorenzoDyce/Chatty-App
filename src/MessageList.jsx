import React from 'react';

class MessageList extends React.Component {
  render() {
    return (
      <main className="messages">
        {this.props.messages.map(message => {
          return (
            <div className="message" key={message.id}>
              <span className="message-username">{message.username}</span>
              <span className="message-content">{message.content}</span>
            </div>
          );
        })}
      </main>
    );
  }
}

export default MessageList;
