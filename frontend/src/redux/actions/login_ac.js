import { LOGIN_CHANGE, LOGOUT_CHANGE } from "../constant";

export const loginChange = data => ({type:LOGIN_CHANGE, data})
export const logoutChange = data => ({type:LOGOUT_CHANGE, data})
