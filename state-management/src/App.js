import './App.css';
import { RecoilRoot } from 'recoil';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
import TodoList from './components/RecoilExample/Todo/TodoList';
import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableMobxStore';
// import MobxExample from './components/MobxExample';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <CurrentUserInfo />

        <br />
        <br />
        <br />

        <TodoList />

        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
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
