
export default function ticket(state = [], action = {}) {
    switch(action.type) {
        case "GET_MESSAGES":
            if ( action.messages.n !== 0) {        
                return action.messages;
            } else {
                return [];
            }
        default:
            return state;
    }
}