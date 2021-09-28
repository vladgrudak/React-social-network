import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.bigPic}>
                <img alt='Profile-big-img'
                     src='https://c.wallhere.com/photos/d1/bd/3840x2160_px_bridge_sea_sunset-1420607.jpg!d'/>
            </div>
            <div className={s.smallPic + ' ' + s.descriptionBlock}>
                <img alt='Profile-small-img'
                     src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
                My profile info
            </div>
        </div>
    )
}

export default ProfileInfo;