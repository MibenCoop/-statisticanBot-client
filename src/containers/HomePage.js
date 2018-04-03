import React, {Component} from 'react';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'
class HomePage extends Component {
    componentDidMount() {
        this.props.getMessages();        
    }
    render() {
        const { messages } = this.props;
        return (
            <div>
                Hello
                <MessagesList messages={messages}/>
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