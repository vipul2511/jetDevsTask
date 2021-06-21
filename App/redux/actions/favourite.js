import { ADD_FAVOURITE,UN_FAVOURITE} from "./index.actions"

export const addFavourite=(email)=>{
    return{type:ADD_FAVOURITE,payload:{email}}
} 
export const unFavourite=(email)=>{
    return{type:UN_FAVOURITE,payload:{email}}
} 