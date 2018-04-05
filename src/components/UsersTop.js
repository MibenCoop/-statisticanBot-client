import React from 'react';
const UsersTop = (props) => {
    const { users, userMessageAmount, firstMessage, lastMessage } = props;
    const usersDiv = users.map((user, index) => 
        (<li key={index}>
            <b>{user}</b><br/>
            <ul>
                <li><b>Amount of Messages: </b>{userMessageAmount[index]}</li> 
                <li><b>First Message: </b>{firstMessage[index]}</li>
                <li><b>Last Message: </b>{lastMessage[index]}</li>
            </ul> 
         </li>))
    
    return(
        <ul>
            {usersDiv}
        </ul>
    );
}

export default UsersTop;