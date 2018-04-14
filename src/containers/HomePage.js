import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import MessagesTop from '../components/MessagesTop'
import UsersTop from '../components/UsersTop';
import Chart from '../components/Chart';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{}
        }
    }
    componentDidMount() {
        this.props.getMessages();        
        this.getChartData();
    }

    getChartData(){
        // Ajax calls here
        let labels =  [];
        for ( let i = 1; i < 31; i++ ) {
            labels.push(i);
        }
        this.setState({
          chartData:{
            labels,
            datasets:[
              {
                label:'Messages Amount',
                data: ["Hello"],
                backgroundColor:'rgba(255, 99, 132, 0.6)'
              }
            ]
          }
        });
      }
    
    render() {
        const { messages } = this.props;
        return (
            <div>
                <h3>Messages amount: {Array.from(messages).length}</h3>
                <MessagesTop messages = {messages}/>
                <UsersTop messages = {messages} />
                <Link to = "/messages">Go to the all messages</Link>
                <Chart messages = {messages} chartData={this.state.chartData} />
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