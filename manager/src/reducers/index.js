import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFromReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
