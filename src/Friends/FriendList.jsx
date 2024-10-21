import React from 'react';
import './FriendList.css'
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="friend-list__item">
          <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className="friend-list__name">{name}</p>
                  <p className={`friend-list__status ${isOnline ? 'friend-list__status-online' : 'friend-list__status-offline'}`}>
                      {isOnline ? 'Online' : 'Offline'}
                  </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
