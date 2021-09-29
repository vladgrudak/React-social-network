import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let Dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Nelly'},
        {id: 3, name: 'Serega'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Vova'},
    ]

    let messages = [
        {id: 1, message: 'Ты - лучший, у тебя всё получится!'},
        {id: 2, message: 'Конечно!'},
        {id: 3, message: 'Я очень рад!'},
        {id: 4, message: 'И я очень рад))'},
        {id: 5, message: ':-D'},
    ]

    let dialogsElements = Dialogs.map(d =>  <Dialog id={d.id} name={d.name} />)
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
