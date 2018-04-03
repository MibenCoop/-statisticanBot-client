import React from 'react';
import MessagesItem from './MessagesItem'
const Messages = (props) => {
    const { messages } = props;
    const messagesDiv = messages.map(message => {
        return (<MessagesItem key={message._id} message={message}/>)
    })
    return(
        <div>
            Messages
            {messagesDiv}
        </div>
    );
}

export default Messages;