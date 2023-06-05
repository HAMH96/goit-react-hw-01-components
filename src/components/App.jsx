import Profile from "./task1/components/Profile"
import Statistics from "./task2/components/Statistics"
import userData from "./task1/utils/user.json";
import statsData from "./task2/utils/data.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics 
        title="Upload Stats"  
        stats={statsData}
      />

    </div>
  );
};
