import { GET_RESOURCE_FAILURE, GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, POST_RESOURCE_FAILURE, POST_RESOURCE_REQUEST, POST_RESOURCE_SUCCESS } from "./actionTypes"

const initialState = {
    resource: [],
    isLoading: false,
    isError: false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_RESOURCE_REQUEST:
            return {...state,isLoading:true}
        case GET_RESOURCE_SUCCESS:
            return {...state,isLoading:false,resource:payload};
        case GET_RESOURCE_FAILURE:
            return {...state,isLoading:false,isError:true};
        case POST_RESOURCE_REQUEST:
            return {...state,isLoading:true};
        case POST_RESOURCE_SUCCESS:
            return {...state,isLoading:false,resource:payload};
        case POST_RESOURCE_FAILURE:
            return {...state,isError:true,isLoading:false}
        default:
            return state;
    }
}