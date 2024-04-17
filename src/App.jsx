import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
 import Login from './Component/Login';
 import Layout from './Layout';
 

const App = () => {
  return (
    <div>
   
   
  
    
 
   
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>        
          <Route path='/login'element={<Login/>}/>
          <Route path='/' element={<Layout/>}/> 
           
      
          
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App