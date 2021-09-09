import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './Profile.module.css';
import style from './../../common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    console.log(profile);
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>Full name: {createField('Full name', 'fullName', [], Input)} </div>
            <div>Looking for a job:{createField('', 'lockingForAJob', [], Input, { type: 'checkbox' })}</div>
            <div>My proffessional skills:{createField('My proffessional skills', 'LookingForAJobDescription', [], Textarea,)}</div>
            <div>About me: {createField('About me', 'aboutMe', [], Textarea,)}</div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.data.contacts).map(key => {
                    return <div className={s.contact}>
                        <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;