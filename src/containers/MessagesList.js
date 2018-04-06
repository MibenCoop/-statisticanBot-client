import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { getMessages } from '../actions/messages'
import MessagesItem from '../components/MessagesItem'
import getValidData from '../utils/handlingMessages'

class MessagesList extends Component {

    componentDidMount() {
        this.props.getMessages();        
    }

    sortMessages = (messages) => 
        (messages.slice()).sort((a,b) => a.date - b.date);

    

    render() {
        const { messages } = this.props;
        const sortedMessages = this.sortMessages(messages).map(message => getValidData(message));
        const usersList = sortedMessages.map(message => 
            <MessagesItem key={message._id} message={message}/>
        )
        return(
            <section>
                <h3>Messages amount: {Array.from(messages).length}</h3>
                {usersList}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages
})

const mapDispatchToProps = dispatch => ({
    getMessages: () => dispatch(getMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);