const actionTypes = {
  transition: 'spent/history/transition'
};

const transition = action => ({
  type: actionTypes.transition,
  action
});

const actions = {
  listen: (history) => (dispatch) => {
    history.listen((_location, action) => {
      dispatch(transition(action));
    });
  },
}

const reducer = (state = { action: null }, action) => {
  const { type, ...payload } = action;

  switch (type) {
    case actionTypes.transition:
      return {
        ...state,
        ...payload,
      }
    default:
      return state;
  }
};

const baseSelectors = {
  action: state => state.history.action,
};

const selectors = {
  ...baseSelectors,
};

export { actions, reducer, selectors };
