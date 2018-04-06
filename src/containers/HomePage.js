import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesTop from '../components/MessagesTop'
import UsersTop from '../components/UsersTop';

class HomePage extends Component {
    componentDidMount() {
        this.props.getMessages();        
    }
    
    render() {
        const { messages } = this.props;
        return (
            <div>
                <h3>Messages amount: {Array.from(messages).length}</h3>
                <MessagesTop messages = {messages}/>
                <UsersTop messages = {messages} />
                <Link to = "/messages">Go to the all messages</Link>
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