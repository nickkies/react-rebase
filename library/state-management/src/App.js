import './App.css';
import CharacterCounter from './components/ZustandExample/CharacterCounter';
import CurrentUserInfo from './components/ZustandExample/CurrentUserInfo';
import Scratches from './components/ZustandExample/Scratches';
// import { RecoilRoot } from 'recoil';
import Text from './components/ZustandExample/Text';
import TodoList from './components/ZustandExample/Todo/TodoList';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import TodoList from './components/RecoilExample/Todo/TodoList';
// import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableMobxStore';
// import MobxExample from './components/MobxExample';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className='App'>
      <Scratches />
      <CurrentUserInfo />
      <TodoList />
      <CharacterCounter />
      <Text />
      {/* <RecoilRoot>
        <CurrentUserInfo />

        <br />
        <br />
        <br />

        <TodoList />

        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot> */}
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
