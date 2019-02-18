import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AccountForm from './components/form/account-form';
import { accountActions } from './actions';
import '../../App.css';
import * as validators from './components/form/validation';

class AccountView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.onSubmit();
  }

  onSubmit() {
    return values => {
      validators.submitValidation(values);
      this.props.createAccount(values);
      this.props.resetForm('ACCOUNT');
    };
  }

  render() {
    return <AccountForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  {
    resetForm: reset,
    createAccount: accountActions.createAccount
  }
)(AccountView);
