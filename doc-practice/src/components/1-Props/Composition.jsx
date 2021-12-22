import React from 'react'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name='Nick' />
      <Welcome name='Jessy' />
      <Welcome name='Joon' />
      <Welcome name='Jin' />
    </div>
  );
}
