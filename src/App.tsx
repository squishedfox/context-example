import React, { Context } from 'react';
import useGetUserHook, { IUser } from './hooks';

const App = () => {
  const {
    isInitialLoading,
    user,
    fetch,
  } = useGetUserHook();

  if (isInitialLoading) {
    return <p>Spinner...</p>;
  }
  
  if (!user) {
    return <h2>Not Found</h2>;
  }

  return <UserContext.Provider value={{user: user, fetch: fetch }}>

  </UserContext.Provider>
};

export default App;
