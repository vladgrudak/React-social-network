import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'My first Post', likesCount: 10},
        {id: 2, message: 'Hello World!', likesCount: 11},
        {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
        {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
        {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
    ]

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
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>
        </div>
    );
}
export default MyPosts;