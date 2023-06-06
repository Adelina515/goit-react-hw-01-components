import user from 'user.json';
import Profile from "./profile/Profile";
import data from 'data.json';
import Statistics from './statistics/Statistics';
import friends from './friendList/friends.json';
import FriendList from './friendList/FriendList';
import transactions from './transactions/transactions.json';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      </div>
      <div
        style={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        
           }}
      >
        <Profile username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
          stats={user.stats} />
        
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
         
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
        
      </div>
    </div>
  );
};


