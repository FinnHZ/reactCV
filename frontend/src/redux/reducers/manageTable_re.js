import { CHANGE_MANAGE_TABLE } from "../constant";


const initState = ""

export default function changeManageReducer(preState=initState, action){
    const {type, data} = action

    switch(type){
        case CHANGE_MANAGE_TABLE:
            return data
        default:
            return preState
    }

}