import { createSelector } from 'reselect';

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

export default selectors;
