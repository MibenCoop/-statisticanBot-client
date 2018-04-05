import React from 'react';
const MessagesTop = (props) => {
    const { messages, messageAmount } = props;
    const messagesDiv = messages.map((message, index) => 
        (<li key={index}>{message}: {messageAmount[index]} </li>))
    
    return(
        <ul>
            {messagesDiv}
        </ul>
    );
}

export default MessagesTop;