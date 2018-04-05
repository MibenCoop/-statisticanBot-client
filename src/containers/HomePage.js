import React, {Component} from 'react';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'
import MessagesTop from '../components/MessagesTop'
import UsersTop from '../components/UsersTop';

class HomePage extends Component {
    componentDidMount() {
        this.props.getMessages();        
    }

    getMessageData = (messages, property) => {
        const messagesList = messages.map(message => message[property] )
        return messagesList
            .sort((a,b) => messagesList.filter(v => v === a).length - messagesList.filter(v => v === b).length)                        
            .filter((elem, index, self) => index === self.indexOf(elem))
            .reverse()
    }
    
    getMessagesAmount = (filterMessagesData, messages, property) => {
        return filterMessagesData
            .map(message => messages.filter(v => v[property] === message).length)
    }
    getFirstMessageData = (activeUsers, messages, property) => 
        activeUsers
            .map(user => messages
                .filter(v => v[property] === user)
                .sort((a,b) => a.date - b.date)
                .filter((message, index) => index === 0 ? true : false)
            )
           .map((message) => message[0])
           .map(message => {
               const date = new Date(message.date*1000);
               const reqMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
               const reqDay = date.getDate() < 9 ? "0" + date.getDate() : date.getDate(); 
               const reqMinutes = date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();  
               return `${reqDay}-${reqMonth}-${date.getFullYear()}   ${date.getHours()}:${reqMinutes}`
            })


    getLastMessageData = (activeUsers, messages, property) => 
         activeUsers    
            .map(user => messages
                .filter(v => v[property] === user)
                .sort((a,b) => b.date - a.date)
                .filter((message, index) => index === 0 ? true : false)
            )
            .map((message) => message[0])
            .map(message => {
                const date = new Date(message.date*1000);
                const reqMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
                const reqDay = date.getDate() < 9 ? "0" + date.getDate() : date.getDate(); 
                const reqMinutes = date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();  
                return `${reqDay}-${reqMonth}-${date.getFullYear()}   ${date.getHours()}:${reqMinutes}`
             })

    render() {
        const { messages } = this.props;
        const frequentMessages =this.getMessageData(messages, "text"); 
        const activeUsers = this.getMessageData(messages, "username");
        const frequentMessagesAmount =this.getMessagesAmount(frequentMessages, messages, "text"); 
        const userMessageAmount = this.getMessagesAmount(activeUsers ,messages, "username");
        const firstMessage = this.getFirstMessageData(activeUsers, messages, "username");
        const lastMessage = this.getLastMessageData(activeUsers, messages, "username");
        console.log('lastMessage', firstMessage, lastMessage )
        return (
            <div>
                Messages amount: {Array.from(messages).length}<br/>
                Top 5 most frequent messages: 
                <MessagesTop 
                    messages={frequentMessages.slice(0,5)}
                    messageAmount = {frequentMessagesAmount}
                />
                Top 5 most active users:
                <UsersTop 
                    users={activeUsers.slice(0,5)}
                    userMessageAmount = { userMessageAmount}
                    firstMessage = {firstMessage}
                    lastMessage = {lastMessage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages
})

const mapDispatchToProps = dispatch => ({
    getMessages: () => dispatch(getMessages()),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);