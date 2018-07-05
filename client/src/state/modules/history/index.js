const actionTypes = {
  transition: 'spent/history/transition'
};

const transition = ({ location, action }) => ({
  type: actionTypes.transition,
  location,
  action
});

const actions = {
  listen: (history) => (dispatch) => {
    history.listen((location, action) => {
      dispatch(transition({ location, action }));
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
  location: state => state.history.location,
};

const selectors = {
  ...baseSelectors,
};

export { actions, reducer, selectors };
