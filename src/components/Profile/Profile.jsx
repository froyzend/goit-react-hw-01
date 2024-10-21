import css from './Profile.module.css';
import React from 'react';
const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profileCard}>
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.userTextName}>{username}</p>
            <p className={css.userText}>@{tag}</p>
            <p className={css.userText}>{location}</p>
            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;

