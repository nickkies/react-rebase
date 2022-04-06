import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterFields() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: any) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('name')} placeholder='User Name' />
      <br />
      <input type='password' {...register('password')} placeholder='Password' />
      <input type='submit' />
      <p>{result}</p>
    </form>
  );
}
