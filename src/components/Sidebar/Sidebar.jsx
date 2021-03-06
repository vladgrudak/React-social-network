import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let friends = props.friends.map(f => <Friend name={f.name}/>)

    return (
        <div className={s.sidebar}>
            <div>
                <h3>Friends</h3>
            </div>
            <div className={s.friendsBlock}>
            {friends}
            </div>
        </div>
    )
}
export default Sidebar;