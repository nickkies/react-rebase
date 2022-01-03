import React from 'react';
import './Example.scss';

export default function Exemple() {
  return (
    <div>
      <p>Example</p>
      <p className='font'>Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a href='/'>456</a>
          </li>
        </ul>
      </nav>
      <br />

      <p className='base'>base</p>
      <p className='inverse'>inverse</p>
      <br />

      <p className='info'>info</p>
      <p className='alert'>alert</p>
      <p className='success'>success</p>
      <br />

      <p className='message'>message</p>
      <p className='success2'>success2</p>
      <p className='error'>error</p>
      <p className='warning'>warning</p>
      <br />

      <div className='square-av'></div>
      <div className='circle-av'></div>
      <br />

      <div className='sidebar'>sidebar</div>
      <br />

      <div className='gray'>gray</div>
      <div className='button'>button</div>
      <br />

      <div className='pulse'>pulse</div>
    </div>
  );
}
