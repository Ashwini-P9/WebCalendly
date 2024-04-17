 
  import React, { useState } from 'react'
 // import { NavLink, useLocation, useNavigate } from "react-router-dom";
  import { CiSearch } from "react-icons/ci";
    
  const Search = (setData) => {
    //const navigate= useNavigate();
    const[searchText,setSearchText]=useState("")

    let handleSubmit=e=>{
      e.preventDefault();
    //  navigate(`/integration/${searchText}`)
      
    };
    return (
      <div className='search-bar'> 
      
      <form onSubmit={handleSubmit} className='flex flex-wrap p-2 shadow-lg rounded-full bg-white '> 
       <CiSearch className='m-1 text-blue-700' />
       <input className='flex flex-wrap border-white-400 ' type="text"    
        autoCapitalize='none' spellCheck="false"   placeholder='search for integration'  value={searchText}  onChange={(e)=>
        setSearchText(e.target.value)
        
      }
      
      /> 
       </form>
       </div>
        
    )
  }
  
  export default Search