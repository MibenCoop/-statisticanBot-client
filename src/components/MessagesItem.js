import React from 'react';

const MessagesItem = (props) => {
    const { message } = props;
    return(
        <div>{message.username} : {message.text}</div>
    );
}

export default MessagesItem;