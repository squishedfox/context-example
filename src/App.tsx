import useGetUserHook from './hooks';
import { UserContext } from './context';
import UserProfile from './components';

const App = () => {
  const {
    isInitialLoading,
    isFetching,
    user,
    fetch,
  } = useGetUserHook();

  if (isInitialLoading || isFetching) {
    return <p>Spinner...</p>;
  }
  
  if (!user) {
    return <h2>Not Found</h2>;
  }

  return <UserContext.Provider value={{user: user, fetch: fetch }}>
    <div>
      <UserProfile />
      <button onClick={() => fetch()}>Click to reload</button>
    </div>
  </UserContext.Provider>
};

export default App;
