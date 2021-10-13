import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
      props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return ( <MyPosts updateNewPostText={updateNewPostText}
                      addPost={addPost}
                      newPostText={state.profilePage.newPostText}
                      posts={state.profilePage.posts}/>)
}

export default MyPostsContainer;