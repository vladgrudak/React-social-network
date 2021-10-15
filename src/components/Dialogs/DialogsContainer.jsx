import React from "react";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let sendMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    let updateMessageText = (text) => {
                        store.dispatch(changeNewMessageTextActionCreator(text))
                    }
                    return (
                        <Dialogs sendMessage={sendMessage}
                                 updateMessageText={updateMessageText}
                                 dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 newMessageText={state.dialogsPage.newMessageText}/>)
                }

            }
        </StoreContext.Consumer>

    );
}

export default DialogsContainer;
