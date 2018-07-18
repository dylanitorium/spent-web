export const conditionalClasses = (config = {}) => (
  Object.keys(config).reduce((combined, i) => (
    config[i] ? `${combined} ${i}` : combined
  ), '')
);
