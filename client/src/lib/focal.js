
const { history } = window;

const FOCAL_KEY = 'm';

const queryStringToObj = (string) => {
  const obj = {};

  if (string.length) {
    string
      .substring(1)
      .split('&')
      .forEach((query) => {
        const [key, value] = query.split('=');
        obj[key] = value;
      });
  }

  return obj;
};

const queryObjToString = obj => Object.keys(obj)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  .join('&');

const parsePath = (path) => {
  let pathname = path || '/';
  let search = '';
  let hash = '';

  const hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  const searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash,
  };
};

const createPath = (location) => {
  const { pathname, search, hash } = location;

  let path = pathname || '/';

  if (search && search !== '?') { path += search.charAt(0) === '?' ? search : `?${search}`; }

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : `#${hash}`;

  return path;
};

const setFocalMessage = (message) => {
  const currentPath = window.location.href;
  const currentLocation = parsePath(currentPath);
  const obj = queryStringToObj(currentLocation.search);
  obj[FOCAL_KEY] = message;
  const string = queryObjToString(obj);

  const newLocation = {
    ...currentPath,
    search: string,
  };

  const newPath = createPath(newLocation);

  history.replaceState(null, null, newPath);
};

const getFocalMessage = () => {
  const currentPath = window.location.href;
  const currentLocation = parsePath(currentPath);
  const obj = queryStringToObj(currentLocation.search);

  const message = obj[FOCAL_KEY];

  return message ? decodeURIComponent(message) : undefined;
};

const clearFocalMessage = () => {};

const focal = {
  set: setFocalMessage,
  get: getFocalMessage,
  clear: clearFocalMessage,
};

export default focal;
