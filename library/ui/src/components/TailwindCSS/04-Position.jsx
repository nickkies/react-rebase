import React from 'react';

export default function Position() {
  return (
    <div className='relative bg-gray-50 rounded-xl dark:bg-gray-800/25 w-1/2'>
      <div className='grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-white text-sm font-bold leading-6' />
      <div className='relative rounded-xl overflow-auto p-8'>
        <div className='grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-white text-sm font-bold leading-6'>
          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='p-4 w-14 h-14 absolute left-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              01
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute inset-x-0 top-0 h-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              02
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute top-0 right-0 h-16 w-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              03
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute inset-y-0 left-0 w-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              04
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute inset-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              05
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute inset-y-0 right-0 w-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              06
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute bottom-0 left-0 h-16 w-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              07
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute inset-x-0 bottom-0 h-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              08
            </div>
          </div>

          <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300'>
            <div className='absolute bottom-0 right-0 h-16 w-16 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
              09
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
