import {combineReducers} from "redux"
import loginReducer from "./login_re"
import validateReducer from "./validate_re"
import updateDetailChartReducer from "./detailChart_re"

export default combineReducers({loginReducer, validateReducer, updateDetailChartReducer})