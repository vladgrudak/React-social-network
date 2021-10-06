let store = {
    _callSubscriber() {
        return 'there is not subs here'
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

        sidebar: {
            friends: [
                {name: 'Sasha'},
                {name: 'Sveta'},
                {name: 'Serega'}
            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let lastId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1
            let newPost = {
                id: lastId,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.postText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let lastId = this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1
            let newMessage = {
                id: lastId,
                message: this._state.dialogsPage.newMessageText
            }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this._state)
        }
    }
}


export default store;