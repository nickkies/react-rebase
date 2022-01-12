import './App.css';
import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/Text';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableMobxStore';
// import MobxExample from './components/MobxExample';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <FontButton />
        <Text />
      </RecoilRoot>
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <MobxExample /> */}
      {/* <Counter />
      <br />
      <br />
      <br /> */}
      {/* <Counter2 /> */}
    </div>
  );
}

export default App;
