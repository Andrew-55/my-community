import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPost/MyPostsConteiners';


const Profile = ({ profile, status, updateStatus, store, savePhoto, saveProfile, ...props }) => {

    return (
        <div className=''>
            <ProfileInfo isOwner={props.isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile} />
            <MyPostsConteiner store={store} />
        </div >
    )
}

export default Profile;
