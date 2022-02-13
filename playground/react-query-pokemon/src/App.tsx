import DetailPage from 'Pages/DetailPage';
import IndexPage from 'Pages/indexPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path=':id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
