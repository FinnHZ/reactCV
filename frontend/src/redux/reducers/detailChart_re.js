import { UPDATEDETAILCHART } from "../constant";

const initState = {name:"", column:[], data:[]}

export default function updateDetailChartReducer(preState=initState, action){
    const {type, data } = action

    switch(type){
        case UPDATEDETAILCHART:
            return {...data}
        default:
            return preState
    }
}