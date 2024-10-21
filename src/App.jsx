import { useState, useEffect } from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';
import ProfileData from './components/Profile/profileData.json';
import friendsData from './components/Friends/friends.json'; 
import transactions from './components/transaction/transaction.json';
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
