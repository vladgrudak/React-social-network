import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.messageText}
        </div>
    );
}

export default Message;