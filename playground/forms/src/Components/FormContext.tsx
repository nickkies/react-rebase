import { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const NestedInput = () => {
  const { register } = useFormContext();

  return <input placeholder='User Name' {...register('name')} />;
};

export default function FormContext() {
  const formMethods = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: any) => {
    setResult(JSON.stringify(data));
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type='submit' />
        <p>{result}</p>
      </form>
    </FormProvider>
  );
}
