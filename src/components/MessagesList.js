import React from 'react';
import MessagesItem from './MessagesItem'
const MessagesList = (props) => {
    const { messages } = props;
    const usersList = messages.map(message => {
        return (<MessagesItem key={message._id} message={message}/>)
    })
    
    return(
        <div>
            Messages amount: {Array.from(messages).length} 
            {usersList}
        </div>
    );
}

export default MessagesList;