/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import {
  BsPencil
} from "react-icons/bs";
import { useSelector } from 'react-redux';

const BrowseCategorySection = () => {
  const categories = useSelector((state) => state.categories.categoriesList);

  return (
    <div className='bg-white dark:bg-slate-800'>
      <section className='container mx-auto px-2 lg:px-4'>
        <div className='container mx-auto px-5'>
          <h1 className='text-4xl font-bold text-center mt-[5rem] mb-8 text-violet-800 dark:text-violet-400'>Browse By Category</h1>
          <Link href="/forum/create-topic" passHref>
            <button className='rounded-md bg-rose-500 text-white font-semibold px-4 py-2 hover:bg-slate-700 duration-300 inline-flex'>
              New Topic <span className='ml-2 mt-1'><BsPencil /></span>
            </button>
          </Link>


          <div className='grid container mx-auto my-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
            {
              categories.map(category =>
                <Link href={`/forum/find-topic/${category.subTitle}`} key={category._id} passHref>
                  <div className=' bg-slate-200 dark:bg-slate-700 rounded-md drop-shadow-md cursor-pointer'>
                    <div className='flex m-5 px-5 align center'>
                      <span className='mt-1 mr-2 text-2xl'>
                        <img src={category.icon} alt="" className="w-7" />
                        {/* <BsPencil /> */}
                      </span>
                      <h1 className='font-bold text-2xl pl-3 dark:text-slate-200'>
                        {category.title}
                      </h1>
                    </div>
                    <p className='font-semifold text-base m-5 px-5 dark:text-slate-200'>
                      {category.desc}
                    </p>
                  </div>
                </Link>

              )
            }
          </div >
        </div >
      </section >
    </div>
  );
};

export default BrowseCategorySection;