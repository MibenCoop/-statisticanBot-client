import React from 'react';
const UsersTop = (props) => {
    const { users, userMessageAmount, firstMessage, lastMessage } = props;
    const usersDiv = users.map((user, index) => 
        (<li key={index}>
            <b>{user}</b><br/>
            <ul>
                <li><b>Amount of Messages: </b>{userMessageAmount[index]}</li> 
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
        <ul>
            {usersDiv}
        </ul>
    );
}

export default UsersTop;