import Profile from "./task1/components/Profile"
import Statistics from "./task2/components/Statistics"
import userData from "./task1/utils/user.json";
import statsData from "./task2/utils/data.json";
import FriendList from "./task3/components/FriendList";
import friendsData from './task3/utils/friends.json';
import transactionsHistoryData from "./task4/utils/transactions.json";
import TransactionHistory from "./task4/components/TransactionHistory";

const styleTest = {
  height: '70vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div>
      <section>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </section>

      <Statistics
        title="Upload Stats"
        stats={statsData}
      />
      
      <FriendList
        friends={friendsData}
      />

      <TransactionHistory
        items={transactionsHistoryData}  
      />

    </div>
  );
  
};
