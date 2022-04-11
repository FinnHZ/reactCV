import { LOGIN_CHANGE, LOGOUT_CHANGE } from "../constant";

const initState = "unsuccess"

export default function loginReducer(preState=initState, action){
    const {type, data} = action

    switch (type){
        case LOGIN_CHANGE:
            return data      
        case LOGOUT_CHANGE:
            return data     
        default:
            return preState
    }
}