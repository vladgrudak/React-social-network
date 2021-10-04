import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, changeNewMessageText, changeNewPostText} from "./redux/state";

export let rerenderAllTree = (state) => {
    ReactDOM.render(<React.StrictMode> <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} addMessage={addMessage} changeNewMessageText={changeNewMessageText}/> </React.StrictMode>, document.getElementById('root'));
}