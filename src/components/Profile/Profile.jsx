import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPost/MyPostsConteiners';


const Profile = (props) => {

    return (
        <div className=''>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsConteiner store={props.store} />
        </div >
    )
}

export default Profile;
