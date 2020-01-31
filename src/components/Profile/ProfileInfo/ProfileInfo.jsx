import React, { useState } from 'react';
import { ProfileDataFormReduxForm } from './ProfileDataForm';
import classes from './ProfileInfo.module.css';
import Preloarder from '../../common/Preloarder/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/User_default.png';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMove, setEditMove] = useState(false);

    if (!profile) {
        return <Preloarder />
    }


    const onMainConstSelect = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        };
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMove(false);
        });

    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} alt='' />
                <div>{isOwner && <input type={"file"} onChange={onMainConstSelect} />}</div>
                {editMove ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner}
                        goTOEditMode={() => { setEditMove(true) }} />}
                <div><ProfileStatusHooks status={status} updateStatus={updateStatus} /></div>
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goTOEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goTOEditMode} >edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>About me</b>: {profile.aboutMe ? profile.aboutMe : "no"}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;
