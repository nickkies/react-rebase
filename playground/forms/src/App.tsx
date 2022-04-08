import ControlledWrapper from './Components/ControlledWrapper';
import FormContext from './Components/FormContext';
import RegisterFields from './Components/RegisterFields';
import Validation from './Components/Validation';
import Watch from './Components/Watch';

function App() {
  return (
    <div className='App'>
      <Validation />
      <br />
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
