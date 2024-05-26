import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Tabs = () => {
    const navigate = useNavigate();
    const params = useLocation().pathname.split('/')[2];

  return (
    <div>
      <Tab>
        <div className='tabs' style={{backgroundColor:`${params==undefined?'#1a73e8':''}`}} onClick={()=>navigate('/NxtWave_Assignment')}>Resources</div>
        <div className='tabs' style={{backgroundColor:`${params=='requests'?'#1a73e8':''}`}} onClick={()=>navigate('/NxtWave_Assignment/requests')}>Requests</div>
        <div className='tabs' style={{backgroundColor:`${params=='users'?'#1a73e8':''}`}} onClick={()=>navigate('/NxtWave_Assignment/users')}>Users</div>
      </Tab>
    </div>
  )
}

export default Tabs;


const Tab = styled.div`
    display: flex;
    margin: 60px auto;
    border: 1px solid gray;
    width: 70%;
    font-size: 20px;
    justify-content: space-around;

    .tabs{
        border: 1px solid gray;
        width: 100%;
        padding: 1%;
        cursor: pointer;
        transition: ease-in-out 0.4s;
    }
    .tabs:hover{
        background-color: #b7b7b9;
    }
`