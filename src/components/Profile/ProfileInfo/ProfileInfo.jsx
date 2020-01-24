import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloarder from '../../common/Preloarder/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloarder />
    }
    return (
        <div>

            {/* <div>
                <img className={classes.img} src={props.imgUrl} alt='' />
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large} alt='' />
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
