import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Validation() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: any) => {
    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='number'
        placeholder='Age'
        {...register('age', { required: true, min: 17 })}
      />
      <input type='submit' />
      <p>{result}</p>
    </form>
  );
}
