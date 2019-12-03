import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>

            <div>
                <img src={props.imgUrl} alt='' />
            </div>
            <div className={classes.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;
