import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloarder from '../../common/Preloarder/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/User_default.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloarder />
    }

    const onMainConstSelect = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        };
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} alt='' />
                <div>{isOwner && <input type={"file"} onChange={onMainConstSelect} />}</div>
                <div><ProfileStatusHooks status={status} updateStatus={updateStatus} /></div>
            </div>
        </div>
    )
}

export default ProfileInfo;
