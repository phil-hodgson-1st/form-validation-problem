import React from 'react';
import { Field, FormSection, reduxForm } from 'redux-form';
import CheckboxField from './checkbox-field';
import InputField from './input-field';
import SelectField from './select-field';
import * as validators from './validation';
import Constants from '../../../common/utils/constants';

class AccountForm extends React.Component {
  render() {
    const { error, handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} aria-labelledby='awesome form'>
        <h1>Fill out this awesome form</h1>
        <FormSection name='user' component='fieldset'>
          <h3>Your details</h3>
          <Field
            label='Email'
            name='email'
            component={InputField}
            type='text'
            placeholder='example@springload.com'
            id='email'
            validate={[
              validators.requiredValidation,
              validators.emailValidation
            ]}
          />
          <Field
            label='Password'
            className='error'
            name='password'
            component={InputField}
            type='password'
            placeholder='password123'
            id='password'
            validate={[
              validators.requiredValidation,
              validators.minLengthValidation
            ]}
          />
        </FormSection>
        <FormSection name='animals' component='fieldset'>
          <h3>Your animal</h3>
          <Field
            label='Colour'
            name='colour'
            component={SelectField}
            id='email'
            validate={[validators.colourValidation]}
          >
            {Constants.ANIMAL_COLOURS.map((colour, index) => (
              <option key={index} value={colour.name}>
                {colour.label}
              </option>
            ))}
          </Field>

          <p>
            <span className='label'>Animal</span>

            {Constants.ANIMALS.map((animal, index) => (
              <Field
                key={index}
                name={animal.name}
                id={animal.name}
                value={animal.name}
                label={animal.label}
                component={CheckboxField}
              />
            ))}
          </p>
          <Field
            label='Type of tiger'
            name='tiger_type'
            component={InputField}
            type='text'
            placeholder='Siberian'
            id='tiger_type'
            validate={validators.requiredTigerValidation}
          />
        </FormSection>
        {error && <strong className='validationErrorText'>{error}</strong>}
        <fieldset>
          <p>
            <input
              type='submit'
              value='Create account'
              disabled={pristine || submitting}
            />
          </p>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ACCOUNT'
})(AccountForm);
