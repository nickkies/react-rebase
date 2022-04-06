import { Button, Input } from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// interface Form {
//   age: number;
// }

export default function ControlledWrapper() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: any) => {
    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='container'>
        <Controller
          name='age'
          control={control}
          defaultValue={31}
          rules={{ required: true, min: 17, max: 40 }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.age?.type === 'required' ? (
          <span>Age is required</span>
        ) : errors.age?.type === 'min' ? (
          <span>Minimun Age is 17</span>
        ) : (
          errors.age?.type === 'max' && <span>Maximum Age is 40</span>
        )}
      </div>
      <Button type='submit'>제출</Button>
      <p>{result}</p>
    </form>
  );
}
