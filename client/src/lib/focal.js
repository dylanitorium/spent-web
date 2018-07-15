const history = window.history;

const setFocalMessage = (key, message) => {
  history.replaceState(null, null, 'something')
};

const getFocalMessage = (key) => {

}

const focal = {
  set: setFocalMessage,
  get: getFocalMessage,
};

export default focal;


