import React, { useState } from 'react'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { postResourceData } from '../../Redux/HomeReducer/action';

const Resource = () => {
  const [title,setName] = useState('');
  const [link,setLink] = useState('');
  const [description,setDesc] = useState('');
  const [icon_url,setImg] = useState('');
  const dispatch = useDispatch();

  const notify = () => toast.error("something went wrong !");

  const handleChange = (e)=>{
    e.preventDefault();
    const formData = {title,link,description,icon_url};
    dispatch(postResourceData(formData))
    notify();
  }
  return (
    <>
    <ToastContainer position="bottom-center"
        autoClose={3000}
    />
      <h1 style={{textAlign:'left',marginLeft:'10%',fontFamily:'cursive'}}>Add a Resource</h1>
    <Add>
      <div id='form'>
        <form onSubmit={handleChange}>
          <label>NAME</label>
          <input required value={title} onChange={(e)=>setName(e.target.value)} type="text" />
          <label>LINK</label>
          <input required value={link} onChange={(e)=>setLink(e.target.value)} type="url" />
          <label>DESCRIPTION</label>
          <input required value={description} onChange={(e)=>setDesc(e.target.value)} type="text" />
          <label>IMAGE</label>
          <input required value={icon_url} onChange={(e)=>setImg(e.target.value)} type="url" />
          <button type='submit'>submit</button>
        </form>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </div>
    </Add>
    </>
  )
}

export default Resource

// styled components

const Add = styled.div`
  display: flex;
  justify-content: space-between;
   /* for medium screen */
   @media only screen and (min-width: 768px) and (max-width:1024px) {
        display: block;
    }
    /* for small screen */
    @media only screen and (min-width: 320px) and (max-width:767px) {
        display: block;
    }
  img{
    height: 60%;
    width: 50%;
  }
  #form{
    width: 25%;
    text-align: left;
    display: block;
    height: 300px;
    margin: 2% 0 0 9%;
    padding: 3%;
  }
  input{
    margin-bottom: 10%;
    padding: 3%;
    width: 150%;
  }
  button{
        margin: auto;
        margin-right: 30px;
        padding: 10px;
        background-color: #277ff1;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        width: 90%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    label{
      color: gray;
      font-family: cursive;
    }
`