import api from '../api'

export const gettingMessages = messages => ({
    type: "GET_MESSAGES",
    messages
});

export const getMessages = () => dispatch => 
	api.messages.getMessages().then((messages) => dispatch(gettingMessages(messages)))