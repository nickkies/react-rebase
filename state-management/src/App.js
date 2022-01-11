import './App.css';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableMobxStore';
// import MobxExample from './components/MobxExample';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className='App'>
      <TodoList store={observableTodoStore} />
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
