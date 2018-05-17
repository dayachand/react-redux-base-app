import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {reducer as formReducer} from  'redux-form';

const rootReducer = combineReducers({
   form           : formReducer,
   toastr         : toastrReducer,
   auth           : AuthReducer
});

export default rootReducer; 
