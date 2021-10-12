const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

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