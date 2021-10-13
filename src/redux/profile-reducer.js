const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'My first Post', likesCount: 10},
        {id: 2, message: 'Hello World!', likesCount: 11},
        {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
        {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
        {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let lastId = state.posts[state.posts.length - 1].id + 1
            let newPost = {
                id: lastId,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.postText
            return state
        default:
            return state
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST })

export let updateNewPostTextActionCreator = (text) =>
    ({type: CHANGE_NEW_POST_TEXT, postText: text })

export default profileReducer