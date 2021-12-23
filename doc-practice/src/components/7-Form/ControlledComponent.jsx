import React, { useState } from 'react';

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('coconut');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`name: ${name}\nessay: ${essay}\nflavor: ${flavor}`);
    event.preventDefault();
  };

  const handleEssayChange = (event) => {
    setEssay(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>

      <br />
      <br />

      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>

      <br />
      <br />

      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleFlavorChange}>
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
