import React from 'react';

const UserItem = (props) => {
    const { user } = props;
    return(
        <div>{user.username} : {user.text}</div>
    );
}

export default UserItem;