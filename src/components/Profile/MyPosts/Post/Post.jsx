import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='Profile-small-img'
                 src='https://i.pinimg.com/originals/d4/67/f0/d467f0e2caee9eb0fe5acba44877cc17.jpg'/>
            {props.message}<br />
            Likes : {props.likeCounts}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}
export default Post;