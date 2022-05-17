import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, MovieDetail, TvDetail, TvPage } from 'Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/tv/:id' element={<TvDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
