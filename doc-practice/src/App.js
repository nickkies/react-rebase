import ClassComponent from './components/2-State/ClassComponent';
import ClassComponent2 from './components/3-LifeCycle/ClassComponent';
import FunctionalComponent from './components/2-State/FunctionalComponent';
import Composition from './components/1-Props/Composition';
import { Extraction } from './components/1-Props/Extraction';

function App() {
  return (
    <>
      <ClassComponent2 />
      <ClassComponent />
      <FunctionalComponent />
      <Extraction />
      <Composition />
    </>
  );
}

export default App;
