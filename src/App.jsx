import Profile from './components/Profile/Profile';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';
import ProfileData from './components/Profile/profileData.json';
import FriendsData from './components/Friends/friends.json'; 
import transactions from './components/transaction/transaction.json';
import './App.css';


function App() {
  const friends = FriendsData;
  return (
    <>
      <Profile
        name={ProfileData.username}
        tag={ProfileData.tag}
        location={ProfileData.location}
        avatar={ProfileData.avatar}
        stats={ProfileData.stats}
      />
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </>
    
  );
}

export default App;
