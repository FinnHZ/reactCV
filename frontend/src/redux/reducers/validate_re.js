import { VALIDATE_ADD, VALIDATE_REMOVE } from "../constant";

const initState = []

export default function validateReducer(preState=initState, action){
    const {type, data} = action

    switch (type){
        case VALIDATE_ADD:
            return [...preState, data]      
        case VALIDATE_REMOVE:
            preState.remove(data)
            return [...preState]      
        default:
            return preState
    }
}