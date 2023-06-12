import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";



const initialState={
    array:[],
    isloading: false
}




 export const getReducer=(state= initialState,action)=>{
    switch (action.type) {
        case "GET" :
            return{
                ...state,
                array: action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}






export const store= createStore(getReducer, applyMiddleware(thunk))