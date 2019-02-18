import { SubmissionError } from 'redux-form';
import Constants from '../../../common/utils/constants';
import ReactGA from 'react-ga';

export const requiredValidation = value => {
  ReactGA.event({
    category: 'Validation',
    action: 'required validation'
  });

  return value || typeof value === 'number' ? undefined : 'Required Field';
};

export const minLengthValidation = value => {
  ReactGA.event({
    category: 'Validation',
    action: 'min length validation'
  });

  return value && value.length < Constants.MIN_PASSWORD_LENGTH
    ? `Must be ${Constants.MIN_PASSWORD_LENGTH} characters or more`
    : undefined;
};

export const emailValidation = value => {
  ReactGA.event({
    category: 'Validation',
    action: 'email validation'
  });

  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
};

export const colourValidation = value => {
  ReactGA.event({
    category: 'Validation',
    action: 'colour validation'
  });

  return value === 'none' ? `Must select a colour` : undefined;
};

export const requiredTigerValidation = (value, allValues) => {
  if (allValues.animals && allValues.animals.tiger && !value) {
    ReactGA.event({
      category: 'Validation',
      action: 'email validation'
    });

    return 'Required Field';
  }
};

export const submitValidation = values => {
  if (
    Constants.ANIMALS.map(animal => values.animals[animal.name]).filter(x => x)
      .length < Constants.MIN_ANIMALS_SELECTED
  ) {
    ReactGA.event({
      category: 'Validation',
      action: 'animal count validation'
    });

    throw new SubmissionError({
      _error: 'You need at least two animals'
    });
  }
};
