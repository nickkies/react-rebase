import './App.css';
// import Fetcher from './components/swr/Fetcher';
// import Mutate from './components/swr/Mutate';
// import Pagination from './components/swr/Pagination';
// import Cache from './components/swr/Cache';
// import Profile from './components/swr/Profile';
import { QueryClient, QueryClientProvider } from 'react-query';
import Example from './components/ReactQuery/Example';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
      {/* <Pagination />
      <Mutate /> */}
      {/* <Fetcher /> */}
      {/* <Profile />
      <Cache /> */}
    </div>
  );
}

export default App;
