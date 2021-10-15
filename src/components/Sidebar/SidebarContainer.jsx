import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import StoreContext from "../../storeContext";
import Sidebar from "./Sidebar";

const SidebarContext = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    return <Sidebar friends={state.sidebar.friends}/>
                }
            }

        </StoreContext.Consumer>
    )
}
export default SidebarContext;