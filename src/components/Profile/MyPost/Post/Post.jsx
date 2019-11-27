import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511862_28.jpg' alt='' />
            {props.message}
            <div>
                <span>like {props.count}</span>
            </div>
        </div>

    )
}

export default Post;
