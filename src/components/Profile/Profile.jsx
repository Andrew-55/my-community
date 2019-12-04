import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    return (
        <div className=''>
            <ProfileInfo imgUrl='https://avatars.mds.yandex.net/get-pdb/34158/200a7df0-56a0-4f89-9c6e-40f5765995e9/s1200' />
            <MyPosts posts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div >
    )
}

export default Profile;
