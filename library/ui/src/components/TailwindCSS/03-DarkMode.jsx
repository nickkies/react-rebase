import React from 'react';

export default function DarkMode() {
  return (
    <>
      <div>
        <div className='bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl w-1/2 float-left'>
          <div>
            <span className='inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg'>
              <svg
                className='h-6 w-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              />
            </span>
          </div>
          <h3 className='text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight'>
            Writes Upside-Down
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
      <div className='dark'>
        <div className='bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl w-1/2 float-left'>
          <div>
            <span className='inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg'>
              <svg
                className='h-6 w-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              />
            </span>
          </div>
          <h3 className='text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight'>
            Writes Upside-Down
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </>
  );
}
