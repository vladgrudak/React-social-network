import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d =>  <Dialog id={d.id} name={d.name} />)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)

    let messageText = React.createRef();

    let toSendMessage = () => {
        alert(messageText.current.value)
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
                <textarea ref={messageText} >Text</textarea>
                <button onClick={toSendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;
