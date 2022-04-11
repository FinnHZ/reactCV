import { VALIDATE_LOGIN } from "../constant";

const initState = []

export default function loginReducer(preState=initState, action){
    const {type, data} = action

    switch (type){
        case VALIDATE_LOGIN:
            return [...preState, data]      // 真正校验的时候，应该由后端直接发一个验证码并加入到共享的redux的验证码数组中，这里应该
        default:
            return preState
    }
}