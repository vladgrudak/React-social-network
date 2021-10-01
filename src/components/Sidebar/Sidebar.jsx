import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let friends = props.state.friends.map(f => <Friend name={f.name}/>)

    return (
        <div className={s.sidebar}>
            <div>
                <h3>Friends</h3>
            </div>
            {friends}
        </div>
    )
}
export default Sidebar;