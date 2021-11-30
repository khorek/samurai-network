import React, { useState } from 'react';
import s from './Profile.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWIthHooks';
import userPhoto from '../../../assets/images/ava.jpg';
import ProfileDataForm from './ProfileDataForm';
import { Button } from 'react-bootstrap';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }


  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
  }

  return (
    <div className={s.content}>
      {editMode
        ? <div>
            <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          </div>
        : <div>
            <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />
            <div>Status:<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></div>
            <div>
              {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
          </div>
          }
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><Button onClick={goToEditMode} variant="warning">Edit</Button ></div>}
      <div>
        <img src={profile.data.photos.small} alt='Alt' />
      </div>
      <div>Full name: {profile.data.fullName}</div>
      <div>ID: {profile.data.userId}</div>
      <div>Facebook: {profile.data.contacts.facebook}</div>
      <div>About: {profile.data.aboutMe}</div>
      <div>Looking for a job: {profile.data.lookingForAJob ? "yes" : 'no'}</div>
    </div>
  )
}



export default ProfileInfo;