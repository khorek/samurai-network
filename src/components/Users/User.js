import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={user.id} className={styles.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>"'user.location.country'"</div>
                <div>'user.location.city'</div>
            </span>
        </span>
    </div>
}

export default User;