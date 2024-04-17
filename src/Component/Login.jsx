import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
const Login = () => {

  return (
    <>   

      <nav className='sticky p-4  pl-16 flex '>
      <img
             src="https://marketing-assets.calendly.com/media/logo.svg"
             height={200}
             width={200}
             alt="image"
           />
      </nav>

      <hr />

      <div className='mx-w-md overflow-hidden  md:max-w-2xl'> 
      <div className='p-4 '>
        <div className='p-4'>
           <h1 className='font-bold text-6xl font-xxl leading-tight text-gray-800'>Welcome back to 
         
              <span className='font-bold text-blue-600'> Calendly </span>
           </h1>
        </div>
        <div className='p-4'>
Log in to your account to get back to your hub for
 <br />
     scheduling meetings.
        </div>
        <div className='font-bold p-4'>
      Email Address
      <div className='flex w-4 border-black-500 p-4 justify-between '><input  className='bg-black-500' type="email" placeholder='Enter your email'  />
      <span> <button type='button' className='btn btn-primary bg-blue-500 text-white rounded p-2 '>Login</button> </span></div>
        </div>
        <div className='font-bold p-4'>
          Don't have an account?  <NavLink href="/signup"><span className='font-bold text-blue-500'>SignUp</span></NavLink> 
        </div>
      </div>
      </div>
    </>
  )
}

export default Login