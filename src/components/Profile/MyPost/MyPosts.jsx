import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.likecount} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.updateNewPostTextActionCreator(newText);
    }

    return (

        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
