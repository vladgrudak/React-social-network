import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.bigPic}>
                <img alt='Profile-big-img' src='https://c.wallhere.com/photos/d1/bd/3840x2160_px_bridge_sea_sunset-1420607.jpg!d'/>
            </div>
            <div className={s.smallPic}>
                <img alt='Profile-small-img' src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
                My profile info
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile;