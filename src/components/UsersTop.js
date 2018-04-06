import React from 'react';
import { getMessagesAmount, getMessagesInfo, getMessagesDate}  from '../utils/handlingMessages'

const UsersTop = (props) => {
    const { messages } = props;
    
    const users = getMessagesInfo(messages, "username");
    const userMessagesAmount = getMessagesAmount(users ,messages, "username");
    const firstMessage = getMessagesDate(users, messages, ((a, b) => a.date - b.date));
    const lastMessage = getMessagesDate(users, messages, ((a, b) => b.date - a.date));

    const usersDiv = users.map((user, index) => 
        (<li key={index}>
            <b>{user}</b><br/>
            <ul>
                <li><b>Amount of Messages: </b>{userMessagesAmount[index]}</li> 
                <li>
                    <b>First Message text: </b>{firstMessage[index].text}   
                    <b>Date:</b>{firstMessage[index].date} 
                </li>
                <li>
                    <b>Last Message text: </b>{lastMessage[index].text}   
                    <b>Date:</b>{lastMessage[index].date} 
                </li>
            </ul> 
         </li>))
    
    return(
        <section>
            <h3>Top 5 most active users:</h3>
            <ul>
                {usersDiv}
            </ul>
        </section>
    );
}

export default UsersTop;