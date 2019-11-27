import React from 'react';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/34158/200a7df0-56a0-4f89-9c6e-40f5765995e9/s1200' alt='' />
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
