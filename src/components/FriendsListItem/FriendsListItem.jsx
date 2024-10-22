import css from './FriendsListItem.module.css';

const FriendItem = ({avatar, name, isOnline }) => (
  <div>
    <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
    <p className={css.friendName}>{name}</p>
    <p className={`${css.friendStatus} ${isOnline ? css.friendStatusOnline : css.friendStatusOffline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendItem;

