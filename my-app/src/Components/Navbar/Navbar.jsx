import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <Nav>
        <div onClick={()=>navigate('/NxtWave_Assignment')}>
            <img src="https://pbs.twimg.com/profile_images/1507294115469602818/pSjeAdpX_400x400.jpg" alt="logo" />
        </div>
        <div>
            <button onClick={()=>navigate('/NxtWave_Assignment/resource')}>+ADD</button>
        </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
    width: 100%;
    margin: auto;
    display:flex ;
    justify-content: space-between;
    height: 5%;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        img{
        height: 100%;
        width: 20%;
        margin-right: 70%;
        cursor: pointer;
    }
    button{
        margin-right: 30px;
        padding: 10px;
        background-color: #1a73e8;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`