import { Profile } from '../components/Profile/Profile.js';

import user from '../data/user.json';


export const App = () => {
  return (
    <>
      <Profile
        imageUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </>
  );
};