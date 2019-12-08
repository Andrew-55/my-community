//import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsConteiner = (props) => {
//     debugger;
//     let state = props.store.getState();

//     let addPost = () => {

//         props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (newText) => {

//         props.store.dispatch(updateNewPostTextActionCreator(newText));//в диспатч передаем функцию которая нам возвращает актион
//     }

//     return (
//         <MyPosts posts={state.profilePage.posts}
//             updateNewPostTextActionCreator={onPostChange}
//             addPost={addPost}
//             newPostText={state.profilePage.newPostText}
//         />

//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreator: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
