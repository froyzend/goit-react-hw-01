import css from './FriendList.module.css';
import FriendItem from '../FriendsListItem/FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friends => (
        <li key={friends.id} className={css.friendListItem}>
          <FriendItem avatar={friends.avatar} name={friends.name} isOnline={friends.isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
