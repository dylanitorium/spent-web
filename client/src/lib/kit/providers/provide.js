const provide = (...functions) => subject => (
  functions.reduce((result, apply) => apply(result), subject)
);

export default provide;
