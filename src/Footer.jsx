import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import appstore from './assets/appstore.png';
import googleplay from './assets/googleplay.png';
const Footer = () => {
  return (
    <div className='p-0 m-auto'>
        <div className='share pt-4 m-0 p-20'> 
        <section id='[Integrations]EasyAccessConversionPanelSection[HARDCODED]' overflow='visible'>
        <svg width="100%" height="100%" className="sc-fc49f4d0-0 gUVlfr"><use href="/media/backgrounds/desktop.svg#hills-dark-left"></use></svg>
        <div className='pt-16 pb-20 w-full '>
            <div data-testid="conversion-panel" data-id="[Integrations] Easy Access Conversion Panel" direction="row" display="flex" width="100%" class="sc-dd2631d-0 fvWOdk">
                <div  className="sc-fc49f4d0-0 gpPVby h-auto w-full">
                    <h2 className="sc-372af2a2-0 sc-9d5e8960-2 bMQfDd jNkflQ">Easy access for easy bookings</h2>
                    <div   height="auto" width="100%" className="sc-fc49f4d0-0 sc-4f9563f4-1 sc-9d5e8960-0 jZHMye jwzpcO dgwQxN "
                    ><p className=" pt-16">Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth</p>
                    <div className="sc-dd2631d-0 sc-9f52a7fd-5 kXCqii beZgaB button-container pt-16 m-8 rounded w-full flex align-center  md:flex-row items-center justify-center md:justify-between" >
                        <a className="esKNlK primary-button md:flex-row items-center justify-center md:justify-between"   href="/signup">
                            <span className=" rounded-full text-white-500 ">Start for free</span></a>
                            <a className="sc-fe4cd8c2-0 sc-fe4cd8c2-1 iFfxEW button-secondary bg-blue "  href="/contact/demo">
                                <span className="sc-d5ab9746-0 jJcZOt rounded-full">Talks with Sales</span>
                                </a></div></div></div>

                                
                                
 </div>
 </div>
                                
        </section>
        </div>


        <section className='container flex w-full  '>
            <aside className='row m-20 pr-20'>

                <strong><h1 className='text-blue-1000 font-bold text-6xl '>Easy</h1></strong>
                
                <strong> <h2 className='text-blue-600 text-bold text-6xl'>ahead</h2></strong>
                <br /><h5>we take the work out of connecting with 

                    others to you can accomplish more.

                </h5>
                <br/>
                <div className='border-black'> 
                <select className='w-full border-black-2  border-shadow-2xl  m-black' name="" id="">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">spanish</option>
                    <option value="">French</option>
                </select>
                </div>
              <div className='grid flex-row'> 
              <div className='flex'> 
              <img src={appstore} alt="" height={120} width={100} /></div>
               &nbsp; &nbsp;<div className='flex  '> 
              <img src={googleplay} height={100} width={100}  alt="" />
              </div>
              </div>
             <div className='flex gap-2 pt-8'> 
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <AiOutlineYoutube />
                </div> 
            </aside>

                <div className='grid  grid-cols-1 md:grid-cols-3 gap-8 pr-5'> 
                <div className='cards'> 

              
                <div className='about  flex m-8'> <strong><h3 className='text-blue-900 '>About</h3></strong>
                <button  type='submit'className='m-2'>About Calendly</button>
                <button  type='submit'className='m-2'>Contact Sales</button>
                <button  type='submit'className='m-2'>Newsroom</button>
                <button  type='submit'className='m-2'>Careers</button>
                <button  type='submit'className='m-2'>Security</button>
                
                </div>
                <div className='about m-8 flex'><strong><h3 className='text-blue-900'>Solutions</h3></strong>
                <button type='submit' className='m-2'>Customer Success</button>
                <button type='submit' className='m-2'>Sales</button>
                <button type='submit' className='m-2'>Recruiting</button>
                <button type='submit' className='m-2'>Information Technology</button>
                <button type='submit' className='m-2'>Marketing</button>
                
                </div>
                <div className='about m-8'> <strong><h3 className='text-blue-900'>Popular Features</h3>
                </strong>
                <button type='submit' className='m-2'>Embed Calendly</button>
                <button type='submit' className='m-2'>Availability</button>
                <button type='submit' className='m-2'>Sending Notifications</button>
                <button type='submit' className='m-2'>Using Calendly Mobile</button>
                </div>
                <div className='about m-8'> 
                <strong><h3 className='text-blue-900'>Support</h3></strong>
                 <button type='submit' className='m-2'>Help Center</button>
                 <button type='submit' className='m-2'>Video Tutorials</button>
                 <button type='submit' className='m-2'>Cookie Settings</button>
                </div>
                <div className='about m-8 '>
                 <strong><h3 className='text-blue-900'>Add-Ons</h3></strong>
                <button type='submit'>Dowload for Chrome</button>
                <button type='submit'>Download for Firefox</button></div>
                <div className='about m-8'> 
                <strong><h3 className='text-blue-900'>Developers</h3></strong>
                <button type='submit'>Developer Tools</button></div>
                </div>
             
            </div>
        </section>
    </div>
  )
}

export default Footer