import { RecoilRoot } from 'recoil';
import Calendar from './features/Calendar';
import TodoFormModal from './features/TodoFormModal';
import TodoList from './features/TodoList';
import TodoStatisticsModal from './features/TodoStatisticsModal';

function App() {
  return (
    <RecoilRoot>
      <Calendar />

      <TodoFormModal />
      <TodoStatisticsModal />
    </RecoilRoot>
  );
}

export default App;
