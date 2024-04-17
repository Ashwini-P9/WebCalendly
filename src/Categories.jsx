import React from "react";
import zoom from "../src/assets/zoom1.png";
import typeform from '../src/assets/typeform.png';
import webex from './assets/webex.png';
import slack from './assets/slack.png';
import salesforce from './assets/Salesforce.png';
import teams from './assets/team.png';
import hubspot from './assets/hubspot.png';
import zapier from './assets/zapier.png';
import paypal from './assets/paypal.png';
import intercon from './assets/intercom.png';
import stripe from './assets/stripe.png';
import goto from './assets/goto.png';
import  google from './assets/googleAnlytics.png';
import  calendly from "./assets/CalendlyApi.png";
import  chrome from './assets/chrome.png';


const Categories = () => {
  return (
    <div className="flex relative flex-col w-full p-10 ">
      
    
    <div className="flex w-full mt-18 mb-18">
      <div className="flex flex-col">
        <h4 className="categories" width="fit-content">
          Categories
        </h4>
        <button className="flex flex-col  overflow:visible font:inherit apperance:none text-align:inherit cursor:pointer py-4 px-4 bg-white-500  click:bg-blue-500">
          <p>All</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Popular</p>
        </button>

        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Extensions & Apps</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Calendars</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Sales & CRM</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Video Conferencing</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Marketing</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Recruiting &ATS</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Analytics</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit  w-100% py-4 px-4 bg-white">
          <p>Email Messaging</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Embed Calendly</p>
        </button>
        <button className="flex  overflow:visible font:inherit apperance:none text-align:inherit py-4 px-4 bg-white">
          <p>Others Integrations</p>
        </button>
      </div>

     <div className="flex flex-col w-full   "> 
      <div className="eRlnpN">
        <div className="flex flex-row w-full align-center ">
          <span className="view">
            Viewing: &nbsp;
            <span className="font-700">19 Popular</span>
          </span>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#006BFF"
                d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.002 1.002 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1Zm-6.707 9.293A.997.997 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>


      <section className="cards ml-16  pt-8  mt-16 w-full">
        <div className="card  shadow-lg">
          <a href="/integration/zoom" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={zoom}  height={80} width={80} alt="Zoom" />
                
                </div>
                </div> 
                  <h4 className="font-bold">Zoom</h4> 
                  <div className="flex flex-row">
                  
                    <p className="w-full h-auto">
                      Add your Zoom link to every Calendly event automatically
                    </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
       
        </div>
        <div className="card shadow-lg">
         
    
           
        <a href="/integration/typeform" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={typeform} alt="type" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Typeform</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
   Gather,qualify,and schedule
                    </p>
                  </div>
                  <div className="flex w-full  pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className=" card shadow-lg">
        <a href="/integration/webex" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={webex} alt="webex"  height={80} width={80}/>
                
                </div>
                </div> 
                  <h4 className="font-bold">Webex</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Connect from anywhere and eliminate administrative work.  </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className=" card shadow-lg">
        <a href="/integration/slack" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={slack} alt="slack" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Slack</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                    Automate smarter workflows and incorporate Calendly right into your organization's Slack channels.</p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className=" card shadow-lg">
        <a href="/integration/salesforce" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={salesforce} alt="salesforce" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold font-lg">Salesforce</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                       Calendly takes the work out of updating Salesforce so you can sell more </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className="card bg-blue-900 text-white shadow-lg">
          {" "}
          <a href="/integration/" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <p>BUILD WITH US</p>
                
                </div>
                </div> 
                  <h4 className="font-bold text-white">Looking to build an integration with us?</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                    Visit our Developer Portal to explore our API docs and other integration resources.
                    </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-white font-bold hover:black flex">
                    
                      <span >Get Started</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        
        <div className=" card shadow-lg">
        
        <a href="/integration/webex" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={teams} alt="teams" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Microsoft Teams</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Connect from anywhere and eliminate administrative work.  </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className=" card shadow-lg">
        <a href="/integration/hubspot" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={hubspot} alt="hubspot" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Hubspot</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
           Calendly updates HubSpot for you so you can focus on building relationships </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                         <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className=" card shadow-lg">
        <a href="/integration/zapier" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={zapier} alt="Zapier" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Zapier</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                Connect Calendly to your other tools and automate your workflows  </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                           
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
        <div className="card shadow-lg">
        <a href="/integration/webex" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={paypal} alt="paypal" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">PayPal</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
 Simplify biling and reduce no-shows with an integrated Paypal account.  </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
        </div>
          <div className="card shadow-lg"><a href="/integration/intercom" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={intercon} alt="intercom"  height={80} width={80}/>
                
                </div>
                </div > 
                  <h4 className="font-bold">Intercom</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Schedule meetings with leads and customers right from intercom Messenger.  </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a></div>
           <div className="card shadow-lg">
           <a href="/integration/webex" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={stripe} alt="stripe" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Stripe</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                  Simplify biling and reduce no-shows with an integrated Stripe account  </p>
                  </div>
                  <div className="flex w-full  pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                         
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a>
           </div>
              <div className="card shadow-lg"><a href="/integration/goto" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={goto} alt="goto" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">GoTo Meeting</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Connect from anywhere and eliminate administrative work.  </p>
                  </div>
                  <div className="flex w-full pt-8 "> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a></div>
              <div className="card shadow-lg"><a href="/integration/google" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={google} alt="google"  height={80} width={80}/>
                
                </div>
                </div> 
                  <h4 className="font-bold">Google Analytics</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
              Improve campaign tracking using Calendly with your Google Analytics account </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a></div>
              <div className="card shadow-lg"><a href="/integration/webex" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={calendly} alt="calendly"  height={80} width={80}/>
                
                </div>
                </div> 
                  <h4 className="font-bold">Calendly APIs</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Leverage Calendly's APIs for custom Calendly integrations within your product.  </p>
                  </div>
                  <div className="flex w-full pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                         
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a></div>
              <div className="card shadow-lg"><a href="/integration/chrome" target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <div className="flex-col">
                <img src={chrome} alt="chrome" height={80} width={80} />
                
                </div>
                </div> 
                  <h4 className="font-bold">Chrome</h4> 
                  <div className="flex">
                  
                    <p className="w-full h-auto">
                   Use Calendly while you're on the web ,without switching tabs </p>
                  </div>
                  <div className="flex w-full  pt-8"> 
                    <button className="button-link text-blue-500 font-bold hover:black flex">
                      <span>Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span> 
                    </button>
                  </div>

          </a></div>
      </section>
    </div>
    </div>
    </div>
  );
};

export default Categories;
