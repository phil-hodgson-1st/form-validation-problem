import React from 'react';

const SelectField = ({
  children,
  input,
  label,
  name,
  meta: { dirty, error }
}) => (
  <p className={dirty && error ? 'error' : undefined}>
    <label className='label' htmlFor={name}>
      {label}
    </label>
    <select {...input}>{children}</select>
    {dirty && error && <span className='validationErrorText'>{error}</span>}
  </p>
);

export default SelectField;
