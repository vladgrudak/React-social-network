import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Nelly'},
        {id: 3, name: 'Serega'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Vova'},
    ]

    let messagesData = [
        {id: 1, message: 'Ты - лучший, у тебя всё получится!'},
        {id: 2, message: 'Конечно!'},
        {id: 3, message: 'Я очень рад!'},
        {id: 4, message: 'И я очень рад))'},
        {id: 5, message: ':-D'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
            </div>
            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;
