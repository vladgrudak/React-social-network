import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _callSubscriber() {
        return ''
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first Post', likesCount: 10},
                {id: 2, message: 'Hello World!', likesCount: 11},
                {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
                {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
                {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {}
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this.getState())
    }
}

export default store;