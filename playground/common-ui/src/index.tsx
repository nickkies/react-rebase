import React from 'react';
import ReactDOM from 'react-dom';
// import SkeletonApp from './SkeletonApp';
// import CarouselApp from './CarouselApp';
// import PaginationApp from './PaginationApp';
// import ModalApp from './ModalApp';
import InfiniteScrollApp from './InfiniteScrollApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <InfiniteScrollApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
