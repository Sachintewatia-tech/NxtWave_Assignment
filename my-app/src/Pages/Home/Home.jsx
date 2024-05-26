import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getResourceData } from '../../Redux/HomeReducer/action';
import styled from 'styled-components';
import Tabs from '../../Components/Tabs/Tabs';
import Cards from '../../Components/Cards/Cards';

const Home = () => {
    const resource = useSelector((store)=>store.resource);
    const [query,setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredResources, setFilteredResources] = useState([]);
    const dispatch = useDispatch();
    const itemsPerPage = 6;
    const totalPages = Math.ceil((query ? filteredResources.length : resource.length) / itemsPerPage);

    const handleSearchQuery = (e)=>{
        const query=e.target.value

        const res = resource.filter((ele)=>{
            return ele.title.toLowerCase().includes(query.toLowerCase()) 
        });
        setFilteredResources(res);
        setQuery(e.target.value);
    }
    const handleSearch = ()=>{
        const res = resource.filter((ele)=>{
            return ele.title.toLowerCase() == query.toLowerCase() 
        });
        setFilteredResources(res);
        setCurrentPage(1);
    }


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayResources = query ? filteredResources : resource;
    const paginatedResources = displayResources.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(()=>{
        dispatch(getResourceData());
    },[filteredResources]);

  return (
    <Main>
        <Tabs/>
        <input value={query} onChange={handleSearchQuery} type="text" placeholder='search...' />
        <div id='page'>
                <button className='btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> {currentPage} / {totalPages} </span>
                <button className='btn' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        <Homes>
        { query?filteredResources.map((ele)=>{
                return(
                    <Cards key={ele.id} resource={ {...ele}} />
                    )
                }):
            paginatedResources?.map((ele)=>{
                return(
                    <Cards key={ele.id} resource={{...ele}} />
                    )
                })
            }
        </Homes>
    </Main>
  )
}

export default Home;

// using styled components for styling.
const Homes = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 2%;
    /* for medium screen */
    @media only screen and (min-width: 768px) and (max-width:1024px) {
        grid-template-columns: repeat(2,1fr);
    }
    /* for small screen */
    @media only screen and (min-width: 320px) and (max-width:767px) {
        grid-template-columns: repeat(1,1fr);
    }
`
const Main = styled.div`
    input{
    padding: 0.3%;
    width: 40%;
    font-family: initial;
    font-size: 20px;
}
#searchBtn{
    padding: 0.3%;
    font-family: initial;
    font-size: 20px;
    }
#page{
    display: block;
    border: 1px solid gray;
    width: 16%;
    margin: 2% 0 2% 70%;
    padding: 0.5%;
    background-color: #1a73e8;
}
.btn{
    padding: 2%;
    font-family: initial;
    cursor: pointer;
    background-color: #97c1f8;
    border: none;
}

`