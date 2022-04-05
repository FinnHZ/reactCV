import { VALIDATE_LOGIN } from "../constant";

const initState = []

export default function loginReducer(preState=initState, action){
    const {type, data} = action

    switch (type){
        case VALIDATE_LOGIN:
            return [...preState, data]
        default:
            return preState
    }
}