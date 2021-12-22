import React from 'react';

export default function Event() {
  const handleBtnClick = (e) => {
    console.dir(e);
    e.preventDefault();
    console.log('handleBtnClick');
  };

  const handleMouseLeave = (e) => {
    console.dir(e.nativeEvent);
  };

  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  };

  const handleClickBubble = () => {
    console.log('handleClickBubble');
  };

  const handleOnChange = (item) => {
    console.log(item);
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleBtnClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
        <input onChange={() => handleOnChange('123')} />
      </div>
    </div>
  );
}
