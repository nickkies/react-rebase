import ControlledWrapper from './Components/ControlledWrapper';
import FormContext from './Components/FormContext';
import RegisterFields from './Components/RegisterFields';

function App() {
  return (
    <div className='App'>
      <ControlledWrapper />
      <br />
      <FormContext />
      <br />
      <RegisterFields />
    </div>
  );
}

export default App;
