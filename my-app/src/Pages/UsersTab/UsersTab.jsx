import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResourceData } from '../../Redux/HomeReducer/action';
import Tabs from '../../Components/Tabs/Tabs';
import Cards from '../../Components/Cards/Cards';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const UsersTab = () => {
    const resource = useSelector((store)=>store.resource);
    const dispatch = useDispatch();
    const filterUserData = resource?.filter((el)=> {
        return el.tag==='user';
    });
    const notify = () => toast.success("These are the User tags!");
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
        <User>
            {
                filterUserData.map((ele)=>{
                    return(
                        <Cards key={ele.id} resource={ {...ele}}/>
                    )
                })
            }
        </User>
    </>
  )
}

export default UsersTab

const User = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 2%;
`