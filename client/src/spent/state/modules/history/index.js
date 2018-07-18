const actionTypes = {
  transition: 'spent/history/transition',
  listening: 'spent/history/listening',
};

const reducerActions = {
  transition: ({ location, action }) => ({
    type: actionTypes.transition,
    location,
    action,
  }),
  listening: () => ({
    type: actionTypes.listening,
  }),
};

const actions = {
  listen: history => (dispatch) => {
    dispatch(reducerActions.listening());
    history.listen((location, action) => {
      dispatch(reducerActions.transition({ location, action }));
    });
  },
};

const reducer = (state = { action: null }, action) => {
  const { type, ...payload } = action;

  switch (type) {
    case actionTypes.transition:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

const baseSelectors = {
  action: state => state.history.action,
  location: state => state.history.location,
};

const selectors = {
  ...baseSelectors,
};

export { actions, reducer, selectors };
