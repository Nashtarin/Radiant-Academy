import React from 'react';
import {
    BsEyeFill,
    BsFillClockFill,
    BsHash,
    BsHeartFill,
    BsPencil,
    BsSearch,
    BsUmbrella
  } from "react-icons/bs";
import Link from "next/link";

const BrowseCategory = () => {
    return (
        <section className='container mx-auto'>
            <div className='container mx-auto px-5'>
            <h1 className='text-5xl font-bold text-center mt-20 mb-5 text-violet-800'>Browse By Category</h1>  
            
            <Link href="/forum/create-topic">
              <button className='rounded-md bg-rose-500 text-white font-semibold p-2 hover:bg-slate-700 duration-300 inline-flex'>
                New Topic <span className='ml-2 mt-1'><BsPencil/></span> 
              </button>          
             </Link>

            <div className='grid container mx-auto my-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
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
            </div>
          </div>
        </section>
    );
};

export default BrowseCategory;