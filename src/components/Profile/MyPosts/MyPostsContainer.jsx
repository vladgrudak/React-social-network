import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {

    //let state = props.store.getState()


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let updateNewPostText = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <MyPosts updateNewPostText={updateNewPostText}
                                 addPost={addPost}
                                 newPostText={state.profilePage.newPostText}
                                 posts={state.profilePage.posts}/>
                    )
                }

            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;