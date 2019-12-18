import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPost/MyPostsConteiners';


const Profile = (props) => {
    return (
        <div className=''>
            <ProfileInfo imgUrl='https://avatars.mds.yandex.net/get-pdb/34158/200a7df0-56a0-4f89-9c6e-40f5765995e9/s1200'
                profile={props.profile}
            />
            <MyPostsConteiner store={props.store} />
        </div >
    )
}

export default Profile;
