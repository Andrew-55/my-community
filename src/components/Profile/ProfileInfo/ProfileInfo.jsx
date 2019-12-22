import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloarder from '../../common/Preloarder/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloarder />
    }
    return (
        <div>

            {/* <div>
                <img className={classes.img} src={props.imgUrl} alt='' />
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
