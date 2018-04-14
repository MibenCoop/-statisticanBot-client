const getValidData = (message) => {
    const messageDateFormated = Object.assign({}, message)   
    const date = new Date(messageDateFormated.date*1000);
    const reqMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
    const reqDay = date.getDate() < 9 ? "0" + date.getDate() : date.getDate(); 
    const reqMinutes = date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();
    messageDateFormated.date = `${reqDay}-${reqMonth}-${date.getFullYear()}   ${date.getHours()}:${reqMinutes}`
    return messageDateFormated
}

const getMessagesAmount = (filterMessagesData, messages, property) =>
    filterMessagesData
        .map(message => messages.filter(v => v[property] === message).length)

// Depending on the property returns array of  usernames/messages
const getMessagesInfo = (messages, property) => {
        const messagesList = messages.map(message => message[property] )
        return messagesList
            .sort((a,b) => messagesList.filter(v => v === a).length - messagesList.filter(v => v === b).length)                        
            .filter((elem, index, self) => index === self.indexOf(elem))
            .reverse()
    }

// Return array of objects with first and last user message depending on compare func
const getMessagesDate = (activeUsers, messages, compareFunc) => 
    activeUsers
        .map(user => messages
            .filter(v => v.username === user)
            .sort((a,b) => compareFunc(a,b))
            .filter((message, index) => index === 0 ? true : false)
        )
       .map(message => getValidData(message[0]))

const validMonth = (message) => {
    const date = new Date(message.date*1000);
    return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
}

const getMessagesForMonth = (messages) => {
    const date = new Date();
    const currMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
    return messages.filter(message => validMonth(message) === currMonth )
}


const getChartData = (filterMessagesData, label) => {
    return filterMessagesData
        .map(message => { 
            console.log('label, message.data',label, message.date)
        })
}

const getChartMessages = (messages, labels) => {
    let data = [];
    console.log('labels, messages',labels, messages)
    if (labels !== undefined) {
        const messagesValidDate = getMessagesForMonth(messages)
        console.log('messagesValidDate',messagesValidDate)
        return labels.map(label => 
            messagesValidDate
                .filter(v => (new Date(v.date * 1000).getDate() === label)).length
        )
        
    }
    return 0;
}
       
export default getValidData;
export { getMessagesAmount, getMessagesInfo, getMessagesDate, getChartMessages};