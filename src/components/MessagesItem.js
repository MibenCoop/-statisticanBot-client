import React from 'react';

const MessagesItem = (props) => {
    const { message } = props;
    return(
        <div><b>{message.username}</b> : {message.text}  <b>Date:</b> {message.date}</div>
    );
}

export default MessagesItem;