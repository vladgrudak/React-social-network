import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog id='1' name='Vlad' />
                <Dialog id='2' name='Nelly' />
                <Dialog id='3' name='Serega' />
                <Dialog id='4' name='Nastya' />
                <Dialog id='5' name='Ilya' />
            </div>
            <div className={s.messages}>
                <Message messageText='Ты - лучший, у тебя всё получится!' id='1' />
                <Message messageText='Конечно!' id='2'/>
                <Message messageText='Я очень рад!' id='3'/>
                <Message messageText='И я очень рад))' id='4'/>
            </div>
        </div>
    );
}

export default Dialogs;
