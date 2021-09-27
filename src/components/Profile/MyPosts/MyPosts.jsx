import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>TextArea</textarea>
                <button>Add Post</button>
            </div>
            <div className={s.post}>
                <Post message='My first Post' likesCount='10' />
                <Post message='Hello World!' likesCount='11' />
                <Post message='Sosisochka krasivaya' likesCount='12'/>
                <Post message='Sosisochka krasivaya' likesCount='15'/>
                <Post message='Sosisochka krasivaya' likesCount='17'/>
            </div>
        </div>
    );
}
export default MyPosts;