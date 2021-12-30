import React, { useState } from 'react';

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('coconut');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'text') {
      setName(value);
    } else if (name === 'flavor') {
      setFlavor(value);
    } else if (name === 'essay') {
      setEssay(value);
    }
  };

  const handleSubmit = (event) => {
    alert(`name: ${name}\nessay: ${essay}\nflavor: ${flavor}`);
    event.preventDefault();
  };

  // const handleEssayChange = (event) => {
  //   setEssay(event.target.value);
  // };

  // const handleFlavorChange = (event) => {
  //   setFlavor(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name='name' type='text' value={name} onChange={handleChange} />
      </label>

      <br />
      <br />

      <label>
        Essay:
        <textarea name='essay' value={essay} onChange={handleChange} />
      </label>

      <br />
      <br />

      <label>
        Pick your favorite flavor:
        <select name='flavor' value={flavor} onChange={handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
