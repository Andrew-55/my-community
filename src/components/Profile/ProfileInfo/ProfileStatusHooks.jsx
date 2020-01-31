import React, { useState, useEffect } from 'react';
//import classes from './ProfileInfo.module.css';

const ProfileStatusHooks = (props) => {

    let [editMove, setEditMove] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activeteEditMode = () => {
        setEditMove(true);
    }
    const deActiveteEditMode = () => {
        setEditMove(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {

        setStatus(
            e.currentTarget.value
        );
    }

    return (
        <div>
            {!editMove &&
                <div>
                    <b>status: </b><span onDoubleClick={activeteEditMode}  >{props.status || '---'}</span>
                </div>
            }
            {
                editMove &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActiveteEditMode}
                        value={status}

                    />
                </div>
            }
        </div >
    )
}

export default ProfileStatusHooks;
