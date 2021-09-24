import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img alt='Profile-small-img'
                 src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}
export default Post;