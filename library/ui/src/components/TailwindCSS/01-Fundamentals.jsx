import React, { useState } from 'react';
import './button.css';

export default function Fundamentals() {
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <img
        className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
        src='https://tailwindcss.com/img/erin-lindford.jpg'
        alt="Woman's Face"
      />
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p
            className={`text-lg text-${
              isGreen ? 'green-500' : 'black'
            } font-semibold`}
          >
            Erin Lindford
          </p>
          <p className='text-gray-500 font-medium'>Product Engineer</p>
        </div>
        <button
          className='my-btn'
          onClick={() => {
            setIsGreen((prev) => !prev);
          }}
        >
          Message
        </button>
      </div>
    </div>
  );
}
