import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar';
import TodoFormModal from './features/TodoFormModal';
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
