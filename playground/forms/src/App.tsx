import ControlledWrapper from './Components/ControlledWrapper';
import FormContext from './Components/FormContext';
import RegisterFields from './Components/RegisterFields';
import Watch from './Components/Watch';

function App() {
  return (
    <div className='App'>
      <ControlledWrapper />
      <br />
      <FormContext />
      <br />
      <RegisterFields />
      <br />
      <Watch />
    </div>
  );
}

export default App;
