import React, { useState } from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const { Group, Field } = Form;

const FormExampleFieldControlId = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form loading={isLoading}>
      <Group widths='equal'>
        <Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
        <Field
          control={Select}
          options={genderOptions}
          label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
          placeholder='Gender'
          search
          searchInput={{ id: 'form-select-control-gender' }}
        />
      </Group>
      <Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Opinion'
        placeholder='Opinion'
      />
      <Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='joe@schmoe.com'
        error={{
          content: 'Please enter a valid email address',
          pointing: 'below',
        }}
      />
      <Field
        id='form-button-control-public'
        control={Button}
        content='Confirm'
        label='Label with htmlFor'
        onClick={() => setIsLoading(true)}
      />
    </Form>
  );
};

export default FormExampleFieldControlId;
