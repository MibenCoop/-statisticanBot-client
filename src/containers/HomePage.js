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

    getValidData = (message) => {
        const messageObj = Object.assign({}, message)   
        const date = new Date(messageObj.date*1000);
        const reqMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
        const reqDay = date.getDate() < 9 ? "0" + date.getDate() : date.getDate(); 
        const reqMinutes = date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();
        messageObj.date = `${reqDay}-${reqMonth}-${date.getFullYear()}   ${date.getHours()}:${reqMinutes}`
        return messageObj
    }

    getMessagesAmount = (filterMessagesData, messages, property) => {
        return filterMessagesData
            .map(message => messages.filter(v => v[property] === message).length)
    }

    // Depenging on the property give array of  usernames/messages
    getMessagesInfo = (messages, property) => {
        const messagesList = messages.map(message => message[property] )
        return messagesList
            .sort((a,b) => messagesList.filter(v => v === a).length - messagesList.filter(v => v === b).length)                        
            .filter((elem, index, self) => index === self.indexOf(elem))
            .reverse()
    }
    
    // Return array of objects with first and last user messaged depending on compare func
    getMessagesDate = (activeUsers, messages, compareFunc) => 
        // First filter by username and getting their first message
        activeUsers
            .map(user => messages
                .filter(v => v.username === user)
                .sort((a,b) => compareFunc(a,b))
                .filter((message, index) => index === 0 ? true : false)
            )
            //Get object with first message text and date in valid format
           .map(message => this.getValidData(message[0]))
           
    getLastMessageData = (activeUsers, messages, property) => 
        activeUsers    
        .map(user => messages
            .filter(v => v[property] === user)
            .sort((a,b) => b.date - a.date)
            .filter((message, index) => index === 0 ? true : false)
        )
        .map(message => this.getValidData(message[0]))
        
            

    compareDates = (a, b) => a.date - b.date;
    compareReverseDates = (a, b) => b.date - a.date;
    render() {
        const { messages } = this.props;
        const frequentMessages = this.getMessagesInfo(messages, "text"); 
        const activeUsers = this.getMessagesInfo(messages, "username");
        const frequentMessagesAmount =this.getMessagesAmount(frequentMessages, messages, "text"); 
        const userMessageAmount = this.getMessagesAmount(activeUsers ,messages, "username");
        const firstMessage = this.getMessagesDate(activeUsers, messages, this.compareDates);
        const lastMessage = this.getMessagesDate(activeUsers, messages, this.compareReverseDates);
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