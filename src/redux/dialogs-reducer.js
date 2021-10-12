const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let lastId = state.messages[state.messages.length - 1].id + 1
            let newMessage = {
                id: lastId,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeNewMessageTextActionCreator = (text) =>
    ({type: CHANGE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer