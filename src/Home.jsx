import React from 'react' 
import Search from './Search';
import img from './assets/inte.png';
import Navbar from './Navbar';
import Categories from './Categories';
import Footer from './Footer';
import Frequent from './Frequent';

 
const Home = () => {
  return (

    <div>
      
   <Navbar/>
    <div className='home flex flex-row p-8 navbar navbar-light bg-light '>
        <div className='md:flex'> 
        <div className='md:shrink-0'> 
            <a  className='bg-white text-blue' href="/home">Home</a>
            /<a className='bg-white text-blue' href="/product">Product</a>
           / <a className='bg-white ' href="/integration">Integration</a>
             <br />
              <br />
              <div> 
             <p className='apps'>APPS & INTEGRATIONS </p>
             
  
            <h1 className='integrate'>Integrate Calendly,
                 boost productivity</h1> 
            
            <div width='100%' font-weight='normal' height='100%'> <p className='h-auto pb-5 ' >Smart scheduling automation will change the way-and your tools-work. </p>
            </div>
            <Search/>
            </div>
            </div>
            </div>
      <div className='h-auto w-full'>
         <img src={img} alt="image" />
      </div>

      </div>  
         <Categories/>
        <Frequent/>
        <Footer/>
    </div>
    
    
  )
}

export default Home