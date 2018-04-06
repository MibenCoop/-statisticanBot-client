import React from 'react';
import { getMessagesAmount, getMessagesInfo}  from '../utils/handlingMessages'

const MessagesTop = (props) => {
    const { messages } = props;
    const frequentMessages = getMessagesInfo(messages, "text");
    const messagesAmount = getMessagesAmount(frequentMessages, messages, "text"); 
    const messagesList = (frequentMessages.slice(0,5)).map((message, index) => 
        (<li key={index}>{message}: {messagesAmount[index]} </li>))    
    return(
        <section>
            <h3>Top 5 most frequent messages:</h3> 
            <ul>
                {messagesList}
            </ul>
        </section>
    );
}

export default MessagesTop;