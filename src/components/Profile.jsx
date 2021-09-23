import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://c.wallhere.com/photos/d1/bd/3840x2160_px_bridge_sea_sunset-1420607.jpg!d'/>
            </div>
            <div>
                <img src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                    <div className={s.item}>
                        Post3
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;