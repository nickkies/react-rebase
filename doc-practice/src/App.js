import ClassComponent from './components/1-Props/2-State/ClassComponent';
import FunctionalComponent from './components/1-Props/2-State/FunctionalComponent';
import Composition from './components/1-Props/Composition';
import { Extraction } from './components/1-Props/Extraction';

function App() {
  return (
    <>
      <ClassComponent />
      <FunctionalComponent />
      <Extraction />
      <Composition />
    </>
  );
}

export default App;
