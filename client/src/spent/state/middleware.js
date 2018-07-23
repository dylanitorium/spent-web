import * as auth from 'spent/state/modules/auth';
import * as history from 'spent/state/modules/history';

const actionMap = {
  [history.actionTypes.transition]: [auth.actions.error.clear],
};

export const nexus = store => next => (action) => {
  const actionList = actionMap[action.type];

  if (actionList) {
    actionList.forEach(callback => store.dispatch(callback()));
  }

  next(action);
};
