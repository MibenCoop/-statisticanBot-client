import React from 'react';
const MessagesTop = (props) => {
    const { messages } = props;
    const messagesDiv = messages.map((message, index) => 
        (<li key={index}>{message}</li>))
    
    return(
        <ul>
            {messagesDiv}
        </ul>
    );
}

export default MessagesTop;