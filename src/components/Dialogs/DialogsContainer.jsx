import React from "react";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateMessageText = (text) => {
        props.store.dispatch(changeNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs sendMessage={sendMessage}
                 updateMessageText={updateMessageText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;
