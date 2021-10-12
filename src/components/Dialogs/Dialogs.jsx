import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";




const  Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d =>  <Dialog id={d.id} name={d.name} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let messageText = React.createRef();

    let SendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let updateMessageText = () => {
        let text = messageText.current.value
        props.dispatch(changeNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div className={s.messageField}>
                <textarea onChange={updateMessageText} ref={messageText} value={props.dialogsPage.newMessageText}/>
                <button onClick={SendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;
