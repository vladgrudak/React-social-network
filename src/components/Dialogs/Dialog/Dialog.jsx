import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img alt='Profile-small-img'
                 src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
            <NavLink to={'/dialogs/'+ props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;
