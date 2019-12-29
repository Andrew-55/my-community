import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
//import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../redux/utils/validators/validators';
import { Texterea } from '../../common/FormsControls/FormsControls';


const maxLenght10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Texterea} name="newPostText" placeholder={'Post add'}
                    validate={[required, maxLenght10]} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.likecount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (

        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddNewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts;
