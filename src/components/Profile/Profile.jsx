import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPost/MyPostsConteiners';


const Profile = ({ profile, status, updateStatus, store }) => {

    return (
        <div className=''>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsConteiner store={store} />
        </div >
    )
}

export default Profile;
