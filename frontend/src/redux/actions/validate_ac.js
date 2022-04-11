import { VALIDATE_ADD, VALIDATE_REMOVE } from "../constant";

export const validationAdd = data => ({type:VALIDATE_ADD, data})
export const validationRemove = data => ({type:VALIDATE_REMOVE, data})