import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const  Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d =>  <Dialog id={d.id} name={d.name} />)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    let messageText = React.createRef();

    let sendMessage = () => {
        props.sendMessage()
    }

    let updateMessageText = () => {
        let text = messageText.current.value
        props.updateMessageText(text)
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
                <textarea onChange={updateMessageText} ref={messageText} value={props.newMessageText}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;
