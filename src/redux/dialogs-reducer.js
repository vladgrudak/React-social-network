const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Nelly'},
        {id: 3, name: 'Serega'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Vova'},
    ],
    messages: [
        {id: 1, message: 'Ты - лучший, у тебя всё получится!'},
        {id: 2, message: 'Конечно!'},
        {id: 3, message: 'Я очень рад!'},
        {id: 4, message: 'И я очень рад))'},
        {id: 5, message: ':-D'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
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