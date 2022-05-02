import {combineReducers} from "redux"
import loginReducer from "./login_re"
import validateReducer from "./validate_re"
import changeManageReducer from "./manageTable_re"


export default combineReducers({loginReducer, validateReducer, changeManageReducer})