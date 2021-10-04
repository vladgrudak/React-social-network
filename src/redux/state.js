import {rerenderAllTree} from "../render";

let state = {
    profilePage : {
        posts : [
            {id: 1, message: 'My first Post', likesCount: 10},
            {id: 2, message: 'Hello World!', likesCount: 11},
            {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
            {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
            {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Nelly'},
            {id: 3, name: 'Serega'},
            {id: 4, name: 'Nastya'},
            {id: 5, name: 'Vova'},
        ],
        messages : [
            {id: 1, message: 'Ты - лучший, у тебя всё получится!'},
            {id: 2, message: 'Конечно!'},
            {id: 3, message: 'Я очень рад!'},
            {id: 4, message: 'И я очень рад))'},
            {id: 5, message: ':-D'},
        ],
        newMessageText : '',
    },

    sidebar : {
        friends: [
            {name: 'Sasha'},
            {name: 'Sveta'},
            {name: 'Serega'}
        ]
    }
}

export let addPost = () => {
    let lastId = state.profilePage.posts[state.profilePage.posts.length-1].id + 1
    let newPost = {
        id: lastId ,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderAllTree(state)
}

export let changeNewPostText = (postText) => {
    state.profilePage.newPostText = postText

    rerenderAllTree(state)
}

export let addMessage = () => {
    let lastId = state.dialogsPage.messages[state.dialogsPage.messages.length -1].id +1
    let newMessage = {
        id: lastId,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderAllTree(state)
}

export let changeNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text

    rerenderAllTree(state)
}

export default state;