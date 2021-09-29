import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'My first Post', likesCount: 10},
        {id: 2, message: 'Hello World!', likesCount: 11},
        {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
        {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
        {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
    ]

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>TextArea</textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;