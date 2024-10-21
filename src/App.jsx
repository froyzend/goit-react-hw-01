import { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import FriendList from './Friends/FriendList';
import TransactionHistory from './transaction/TransactionHistory';
import ProfileData from './Profile/ProfileData.json';
import friendsData from './Friends/friends.json'; 
import transactions from './transaction/transaction.json';
import './App.css';


function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendsData);
  }, []);
  const { username, tag, location, avatar, stats } = ProfileData;
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
      
      <TransactionHistory items={transactions} />
    </>
    
  );
}

export default App;
