import { useState, useEffect } from 'react';
import Profile from './Profile';
import { avatar, username, tag, location, stats } from './ProfileData.json';
import FriendList from './FriendList';
import friendsData from './friends.json';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendsData); // Загружаем данные из JSON
  }, []);

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
