import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResourceData } from '../../Redux/HomeReducer/action';
import Tabs from '../../Components/Tabs/Tabs';
import styled from 'styled-components';
import Cards from '../../Components/Cards/Cards';
import { ToastContainer, toast } from 'react-toastify';


const RequestsTab = () => {
    const {resource,isLoading,isError} = useSelector((store)=>store);
    const dispatch = useDispatch();
    const filterRequestData = resource?.filter((el)=> {
        return el.tag==='request';
    });
    const notify = () => toast.success("These are the request tags!");

    useEffect(()=>{
        dispatch(getResourceData());
        notify();
    },[]);
  return (
      <>
            <ToastContainer position="top-center"
                autoClose={3000}
                />
        <Tabs/>
        { isLoading?<h1>Loading...</h1>:
        <Req>
            { isError?<h2>🤔Some issue in API while fetching data</h2>:
                filterRequestData.map((ele)=>{
                    return(
                        <Cards key={ele.id} resource={ {...ele}}/>
                    )
                })
            }
        </Req>  }
    </>
  )
}

export default RequestsTab;


const Req = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 2%;
`