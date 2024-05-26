import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResourceData } from '../../Redux/HomeReducer/action';
import Tabs from '../../Components/Tabs/Tabs';
import styled from 'styled-components';
import Cards from '../../Components/Cards/Cards';
import { ToastContainer, toast } from 'react-toastify';


const RequestsTab = () => {
    const resource = useSelector((store)=>store.resource);
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
        <Req>
            {
                filterRequestData.map((ele)=>{
                    return(
                        <Cards key={ele.id} resource={ {...ele}}/>
                    )
                })
            }
        </Req>  
    </>
  )
}

export default RequestsTab;


const Req = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 2%;
`