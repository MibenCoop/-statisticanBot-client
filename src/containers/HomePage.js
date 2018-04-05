import React, {Component} from 'react';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'
import MessagesTop from '../components/MessagesTop'

class HomePage extends Component {
    componentDidMount() {
        this.props.getMessages();        
    }
    getFrequentMessages = (messages) => {
        const messagesList = messages.map(message => message.text )
        return messagesList
            .sort((a,b) => messagesList.filter(v => v === a).length - messagesList.filter(v => v === b).length)                        
            .filter((elem, index, self) => index === self.indexOf(elem))
            .reverse()
    }

    getFrequentMessagesAmount = (filterMessages, messages) => {
        return filterMessages
            .map(message => messages.filter(v => v.text === message).length)
    }
    render() {
        const { messages } = this.props;
        const frequentMessages =this.getFrequentMessages(messages); 
        const frequentMessagesAmount =this.getFrequentMessagesAmount(frequentMessages, messages); 
        return (
            <div>
                Messages amount: {Array.from(messages).length}<br/>
                Top 5 most frequent messages: 
                <MessagesTop 
                    messages={frequentMessages.slice(0,5)}
                    messageAmount = {frequentMessagesAmount}
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