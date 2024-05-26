import React from 'react'
import styled from 'styled-components'
const Cards = ({resource}) => {
  return (
    <Card>
        <div className='flex'>
            <div>
                <img src={resource.icon_url} alt="icon" />
            </div>
            <div>
                <p>{resource.title}</p>
                <p style={{color:'gray',marginBottom:'14px',fontFamily:'cursive'}}>{resource.category}</p>
            </div>
        </div>
        <a href={resource.link} style={{textDecoration:'none',fontFamily:'sans-serif'}}>{resource.link}</a>
        <p style={{color:'gray',fontFamily:'monospace'}}>{resource.description}</p>
    </Card>
  )
}

export default Cards

const Card = styled.div`
        overflow: hidden;
        text-align: left;
        margin: auto;
        padding: 3%;
        border: 1px solid #bbbaba;
        border-radius: 7px;
        height: 80%;
        width: 90%;
        background-color:#fafafa;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;     img{
        height: 60px;
        width: fit-content;
        border: 3px solid gray;
        border-radius: 6px;
        transition: ease-in-out 0.7s;
    }
    img:hover{
        transform: scale(1.3);
        overflow: hidden;
    }
    .flex{
        display: flex;
        gap: 5%;
    }


`