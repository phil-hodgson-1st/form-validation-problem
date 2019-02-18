function accountsReducer(state = [], action) {
  if (action.type === 'CREATE_ACCOUNT') {
    console.log('Account created!');
    console.log(action.account);
    return [...state, action.account];
  }
  return state;
}

export default accountsReducer;
