import { createSelector } from 'reselect';
import authentication from 'spent/state/utils/auth';

const createAsyncActionCreator = name => ({
  start: `spent/${name}/start`,
  success: `spent/${name}/success`,
  failure: `spent/${name}/failure`,
})

const actionTypes = {
  authenticate: createAsyncActionCreator('auth/authenticate'),
};

const syncActions = {
  authenticate: {
    start: () => ({ type: actionTypes.authenticate.start }),
    success: () => ({ type: actionTypes.authenticate.success }),
    failure: () => ({ type: actionTypes.authenticate.failure })
  }
};

const asyncActions = {
  authenticate: {
    withEmailAndPassword: ({ email, password }) => (dispatch) => {
      dispatch(syncActions.authenticate.start());
      authentication.startSession.with.emailAndPassword(email, password)
        .then(() => dispatch(syncActions.authenticate.success()))
        .catch((error) => dispatch(syncActions.authenticate.failure()));
    }
  }
};

const initialState = {
  user: undefined,
}

const reducer = (state = initialState, action) => {
  return state;
};

const baseSelectors = {
  user: state => state.auth.user,
};

const derivedSelectors = {
  isAuthenticated: createSelector([baseSelectors.user], user => !!user),
};

const selectors = {
  ...baseSelectors,
  ...derivedSelectors,
};

export { reducer, selectors };
