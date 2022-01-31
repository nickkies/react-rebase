import React from 'react';
import ReactDOM from 'react-dom';
// import SkeletonApp from './SkeletonApp';
// import CarouselApp from './CarouselApp';
import Pagination from './components/Pagination/Pagination';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Pagination />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
