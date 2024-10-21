import React from 'react';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.friendListItem}>
          <div>
            <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
            <p className={css.friendName}>{name}</p>
            <p className={`${css.friendStatus} ${isOnline ? css.friendStatusOnline : css.friendStatusOffline}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
