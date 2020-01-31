import React from 'react';
import { creatField, Input, Texterea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import classes from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';

export const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button >save</button></div>
        {error && <div className={style.formSymmaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {creatField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {creatField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>My professional skills</b>: {creatField("My professional skills", "lookingForAJobDescription", [], Texterea)}
        </div>
        <div>
            <b>About me</b>: {creatField("About me", "aboutMe", [], Texterea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={classes.contact}>
                    <b>{key}: {creatField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)