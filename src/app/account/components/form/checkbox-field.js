import React, { Fragment } from 'react';

const CheckboxField = ({ input, label, name }) => (
  <Fragment>
    <input {...input} type='checkbox' />
    <label htmlFor={name}>{label}</label>
  </Fragment>
);

export default CheckboxField;
