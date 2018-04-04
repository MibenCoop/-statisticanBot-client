import React from 'react';
import MessagesItem from './MessagesItem'
const MessagesList = (props) => {
    const { messages } = props;
    const messagesDiv = messages.map(message => {
        return (<MessagesItem key={message._id} message={message}/>)
    })
    
    return(
        <div>
            Messages amount: {Array.from(messages).length} 
            {messagesDiv}
        </div>
    );
}

export default MessagesList;