import React, {Component} from 'react';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'
import MessagesTop from '../components/MessagesTop'

class HomePage extends Component {
    componentDidMount() {
        this.props.getMessages();        
    }
    getMostFrequentMessage = (messages) => {
        const messageList = messages.map(message => message.text )
        const messagesFiltered = messageList
            .sort((a,b) =>  
                messageList.filter(v => v === a).length - messageList.filter(v => v === b).length)                        
            .filter((elem, index, self) => index === self.indexOf(elem))
            .reverse();
        return messagesFiltered;
    }
    render() {
        const { messages } = this.props;
        const filterMessages =this.getMostFrequentMessage(messages); 
        return (
            <div>
                Messages amount: {Array.from(messages).length}<br/>
                Top most frequent messages: <MessagesTop messages={filterMessages} />
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