import React, { useState } from 'react';

export default function Dialog({ title, description, button }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{ position: 'absolute', left: 100 }}
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      {isOpen && (
        <>
          <div
            style={{
              position: 'absolute',
              zIndex: 99,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid black',
              padding: 24,
              backgroundColor: 'white',
            }}
          >
            {typeof title === 'string' ? <h1>{title}</h1> : title}
            {typeof description === 'string' ? (
              <h5>{description}</h5>
            ) : (
              description
            )}
            <div onClick={() => setIsOpen(false)}>
              {typeof button === 'string' ? (
                <button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  {button}
                </button>
              ) : (
                button
              )}
            </div>
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'darkgray',
            }}
          />
        </>
      )}
    </>
  );
}
