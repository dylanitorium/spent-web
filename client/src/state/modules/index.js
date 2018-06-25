import { combineReducers } from 'redux';
import { reducer as auth} from './auth';

const reducer = combineReducers({ auth });

export default reducer;
