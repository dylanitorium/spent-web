import { combineReducers } from 'redux';
import { reducer as auth } from './auth';
import { reducer as history } from './history';

const reducer = combineReducers({ auth, history });

export default reducer;
