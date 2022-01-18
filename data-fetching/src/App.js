import './App.css';
// import Fetcher from './components/swr/Fetcher';
import Mutate from './components/swr/Mutate';
import Pagination from './components/swr/Pagination';
// import Cache from './components/swr/Cache';
// import Profile from './components/swr/Profile';

function App() {
  return (
    <div className='App'>
      <Pagination />
      <Mutate />
      {/* <Fetcher /> */}
      {/* <Profile />
      <Cache /> */}
    </div>
  );
}

export default App;