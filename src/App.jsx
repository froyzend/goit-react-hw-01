import Profile from './components/Profile/Profile';
import FriendList from './components/Friends/FriendsList';
import TransactionHistory from './components/transaction/TransactionHistory';
import profileData from './components/Profile/profileData.json';
import friends from './components/Friends/friends.json'; 
import transactions from './components/transaction/transaction.json';
import './App.css';


function App() {
  return (
    <>
      <Profile
        name={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </>
    
  );
}

export default App;
