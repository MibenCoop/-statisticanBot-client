import React from 'react';
const MessagesTop = (props) => {
    const { messages, messageAmount } = props;
    const messagesList = messages.map((message, index) => 
        (<li key={index}>{message}: {messageAmount[index]} </li>))
    
    return(
        <ul>
            {messagesList}
        </ul>
    );
}

export default MessagesTop;