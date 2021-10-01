import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.sidebarFriends}>
            <img alt='Profile-small-img'
                 src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
            <br></br><span>{props.name}</span>
        </div>
    )
}

export default Friend;