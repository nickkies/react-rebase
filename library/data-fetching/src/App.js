import './App.css';
// import Fetcher from './components/swr/Fetcher';
// import Mutate from './components/swr/Mutate';
// import Pagination from './components/swr/Pagination';
// import Cache from './components/swr/Cache';
// import Profile from './components/swr/Profile';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import Example from './components/ReactQuery/Example';
// import QuickStart from './components/ReactQuery/QuickStart';
// import Pagination from './components/ReactQuery/Pagination';
import InfiniteQueries from './components/ReactQuery/InfiniteQueries';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <InfiniteQueries />
        {/* <Pagination /> */}
        {/* <Example />
        <QuickStart /> */}

        <ReactQueryDevtools initialIsOpen={false} />
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
