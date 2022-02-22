import React, { useEffect, useState } from 'react';
import {
  BsEyeFill,
  BsFillClockFill,
  BsHash,
  BsHeartFill,
  BsPencil,
  BsSearch,
  BsUmbrella
} from "react-icons/bs";
import FeaturedSection from '../../components/ForumComponents/FeaturedSection';

const index = () => {
  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center my-5 text-violet-800'>
        Welcome to our forum
      </h1>

      <div className=''>
        <div className='input-group justify-center'>
          <input type="search" className='py-2 px-4 w-2/5 focus:outline-none border rounded-sm' placeholder="Let's find out your interested topic" aria-label="Search" ></input>
          <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white transition duration-500 text-xl font-bold">
             <BsSearch/>
          </button>
        </div>
      </div>

      {/* Brows By category section  */}
      <section className='container mx-auto px-5'>
        <h1 className='text-5xl font-bold text-center mt-20 mb-5 text-violet-800'>Brows By Category</h1>  
        <button className='rounded-md bg-rose-500 text-white font-semibold p-2 hover:bg-slate-700 duration-300 inline-flex'>
        {/* this button will link to the forum post page if there is a registerd user */}
        New Topic <span className='ml-2 mt-1'><BsPencil/></span> 
        </button>
        

        <section className='grid container mx-auto my-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
          <div className=' bg-slate-200 rounded-md drop-shadow-md'>
          <div className='flex m-5 px-5'>
              <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
              <h1 className='font-bold text-lg'>Welcome</h1>
          </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
          </div>
          <div className=' bg-slate-200 rounded-md drop-shadow-md'>
            <div className='flex m-5 px-5'>
              <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
              <h1 className='font-bold text-lg'>Welcome</h1>
            </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
          </div>
          <div className=' bg-slate-200 rounded-md drop-shadow-md'>
            <div className='flex m-5 px-5'>
              <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
              <h1 className='font-bold text-lg'>Welcome</h1>
            </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
          </div>
            <div className=' bg-slate-200 rounded-md drop-shadow-md'>
              <div className='flex m-5 px-5'>
                <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
                <h1 className='font-bold text-lg'>Welcome</h1>
              </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
            </div>
          <div className=' bg-slate-200 rounded-md drop-shadow-md'>
            <div className='flex m-5 px-5'>
              <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
              <h1 className='font-bold text-lg'>Welcome</h1>
            </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
          </div>
          <div className=' bg-slate-200 rounded-md drop-shadow-md'>
            <div className='flex m-5 px-5'>
              <span className='mt-1 mr-2 text-2xl'><BsUmbrella/></span>
              <h1 className='font-bold text-lg'>Welcome</h1>
            </div>
          <p className='font-semifold text-base m-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore rerum voluptatum, maxime ipsum ut.</p>
          </div>
        </section>
      </section>
      
      {/* Featured Topic section  */}
      <FeaturedSection/>
      {/* <div className='   lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
       <div className='overflow-hidden border rounded-md my-5'>
          <div className="bg-[url('https://www.themebeta.com/files/windows/images/202009/16/b17482d63e757954009b0fb3ea4654ae.jpeg')] hover:scale-110 duration-300 bg-cover h-40 ">
          <h1 className='text-xl text-center font-bold items text-slate-400'>Locked Forum With Latest Topics</h1>
         </div>
         <p className='text-lg m-2 font-semibold text-slate-400'>Click the explore button be directed somewhere magical </p>
         <hr />
         <span className='mx-2 font-medium'>10 topics</span>
         <span className='mx-2 font-medium'>50 posts</span>
         <button className='bg-rose-500 rounded-full px-3 my-2 py-1 text-white font-medium ml-8 hover:bg-slate-700 duration-300'>Explore</button>
       </div>
      </div> */}
      {/* <div className='grid container mx-auto my-4 grid-rows-auto md:grid-cols-4 xs:grid-cols-1 gap-4'>
          <div className='col-span-3'>
              <div className='grid grid-cols-5 border bg-slate-100 border-slate-400 mb-1 rounded'>
                <div className='col-span-2 my-1'>
                  <h1 className='text-lg font-bold ml-1'>Announcements</h1>
                </div>
                <div className='my-1'>
                  <span className='font-bold'>Replies</span>
                </div>
                <div className='my-1'>
                  <span className='font-bold'>Claps</span>
                </div>
                <div className='my-1'>
                  <h1 className='font-bold'>Author</h1>
                </div>
              </div>
              
              
              
              <div className='grid grid-cols-5 border bg-slate-100 border-slate-400 mb-1 rounded hover:drop-shadow-md'>
                <div className='col-span-2 mt-1'>
                  <h1 className='text-lg font-semibold text-slate-600 ml-1'>JavaScript discussion</h1>
                  <p className='ml-1 text-slate-500'>To learn js you firstly need to prepare yours...</p>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>10</span>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>10852</span>
                </div>
                <div className='flex my-1'>
                  <img src="https://www.w3schools.com/w3images/avatar6.png" alt="" height="40" width="40" style={{borderRadius:"50%", marginRight:"4%"}} />
                  <div className='font-semibold text-slate-600'>
                    <p>By <span className='text-rose-500 font-bold'>cameroon</span></p>
                    <p>Sun Oct 05,2022 06:30pm</p>
                  </div>
                </div>
              </div>
              

          </div>
          <div className=''>
              <div className='bg-slate-900'>
                <h1 className='font-bold text-white text-center border border-white'>Filter Contents</h1>
              </div>
              <div className='bg-slate-900 text-white font-semibold text-center border border-white'>
                <h1>Frontend</h1>
              </div>
              <div className='bg-slate-900 text-white font-semibold text-center border border-white'>
                <h1>Backend</h1>
              </div>
              <div className='bg-slate-900 text-white font-semibold text-center border border-white'>
                <h1>JavaScript</h1>
              </div>
              <div className='bg-slate-900 text-white font-semibold text-center border border-white'>
                <h1>Others</h1>
              </div>
          </div>
      </div> */}
    </section>
  );
};

export default index;
