import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar';
import TodoFormModal from './features/TodoFormModal';

function App() {
  return (
    <RecoilRoot>
      <Calendar />
      <TodoFormModal />
    </RecoilRoot>
  );
}

export default App;
