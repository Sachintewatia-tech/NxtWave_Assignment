import { GET_RESOURCE_FAILURE, GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, POST_RESOURCE_FAILURE, POST_RESOURCE_REQUEST, POST_RESOURCE_SUCCESS } from "./actionTypes"
import axios from 'axios';


// get request 
export const getResourceData = ()=> (dispatch)=>{
    dispatch({type:GET_RESOURCE_REQUEST});
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json').
    then((res)=>{
        dispatch({type:GET_RESOURCE_SUCCESS,payload:res.data});
    }).catch((err)=>dispatch({type:GET_RESOURCE_FAILURE}))
}


// post request
export const postResourceData = (data)=>(dispatch)=>{

    dispatch({ type: POST_RESOURCE_REQUEST });
  
    const proxyUrl = 'http://localhost:8080/';
    const targetUrl = 'https://media-content.ccbp.in/website/react-assignment/add_resource.json';
  
    axios.post(proxyUrl + targetUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      dispatch({ type: POST_RESOURCE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error('Error posting resource:', err);
      dispatch({ type: POST_RESOURCE_FAILURE, payload: err.message });
    });
  };
