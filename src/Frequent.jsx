import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const Frequent = () => {
  return (
    <div className='frequent'>
      <div className='w-full mt-16'>
        <div className='pt-16 pb-4 px-4 md:px-20 max-w-screen-lg mx-auto'>
          <h2 className='text-5xl font-bold text-stone-700 mb-4 text-center'>Frequently Asked Questions</h2>
          <div className='text-center font-semibold pb-20'>
            <p>Not seeing what you are looking for? Go to our&nbsp;
              <a className='text-blue-500' href="https://help.calendly.com/hc/en-us" target='_blank' rel='noopener noreferrer'>Help center</a>
            </p>
          </div>
          <div className='faq-item relative bg-white shadow-md rounded-md p-4 mb-4'>
            <h4>What are Calendly apps</h4>
            <div className='absolute top-4 right-4'>
              <AiOutlinePlus />
            </div>
          </div>
          <div className='faq-item  relative bg-white shadow-md rounded-md p-4 mb-4'>
            <h4>What are Calendly integrations?</h4>
            <div className='absolute top-4 right-4'>
              <AiOutlinePlus />
            </div>
          </div>
          <div className='faq-item  relative bg-white shadow-md rounded-md p-4 mb-4'>
            <h4>How do I install and use integrations?</h4>
            <div className='absolute top-4 right-4'>
              <AiOutlinePlus />
            </div>
          </div>
          <div className='faq-item  relative bg-white shadow-md rounded-md p-4 mb-4'>
            <h4>How can I request a new integration?</h4>
            <div className='absolute top-4 right-4'>
              <AiOutlinePlus />
            </div>
          </div>
          <div className='faq-item  relative bg-white shadow-md rounded-md p-4'>
            <h4>Want to build a Calendly integration? Learn about our API.</h4>
            <div className='absolute top-4 right-4'>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frequent;
