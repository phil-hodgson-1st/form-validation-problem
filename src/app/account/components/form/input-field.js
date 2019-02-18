import React from 'react';

const InputField = ({
  input,
  label,
  name,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <p className={touched && error ? 'error' : undefined}>
    <label className='label' htmlFor={name}>
      {label}
    </label>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <span className='validationErrorText'>{error}</span>}
  </p>
);

export default InputField;
