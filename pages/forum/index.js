// export default function index() {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-5xl font-bold text-center">Welcome To Our Fourm</h1>

//     </div>
//   )
// }
import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>
        Welcome to our forum
      </h1>
      <button className='rounded-md bg-rose-500 text-white font-semibold p-2 hover:bg-slate-700 duration-300'>
        <Link href="/forum/create-topic">New Topic 🖋</Link>
      </button>
      {/* <div className='grid container mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
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
      <div className='grid container mx-auto my-4 grid-rows-auto md:grid-cols-4 xs:grid-cols-1 gap-4'>
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
                  <h1 className='text-lg font-semibold text-slate-600 ml-1'>Node js tutorial</h1>
                  <p className='ml-1 text-slate-500'>To learn node js you firstly need to lear...</p>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>10</span>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>10245</span>
                </div>
                <div className='flex my-1'>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" height="40" width="40" style={{borderRadius:"50%", marginRight:"4%"}} />
                  <div className='font-semibold text-slate-600'>
                    <p>By <span className='text-rose-500 font-bold'>robert</span></p>
                    <p>Sun Oct 05,2022 06:30pm</p>
                  </div>
                </div>
              </div>
              {/* individual forum post */}
              <div className='grid grid-cols-5 border bg-slate-100 border-slate-400 mb-1 rounded hover:drop-shadow-md'>
                <div className='col-span-2 mt-1'>
                  <h1 className='text-lg font-semibold text-slate-600 ml-1'>Learning React js</h1>
                  <p className='ml-1 text-slate-500'>To learn react js follow this book to lear...</p>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>58</span>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>105</span>
                </div>
                <div className='flex my-1'>
                  <img src="https://www.w3schools.com/w3images/avatar5.png" alt="" height="40" width="40" style={{borderRadius:"50%", marginRight:"4%"}} />
                  <div className='font-semibold text-slate-600'>
                    <p>By <span className='text-rose-500 font-bold'>emma</span></p>
                    <p>Sun Oct 05,2022 06:30pm</p>
                  </div>
                </div>
              </div>
              {/* individual forum post */}
              <div className='grid grid-cols-5 border bg-slate-100 border-slate-400 mb-1 rounded hover:drop-shadow-md'>
                <div className='col-span-2 mt-1'>
                  <h1 className='text-lg font-semibold text-slate-600 ml-1'>Mongoose Fundamentals</h1>
                  <p className='ml-1 text-slate-500'>Ok you want to learn mongoose for your...</p>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>36</span>
                </div>
                <div className='mt-1 font-semibold text-slate-600'>
                  <span>20286</span>
                </div>
                <div className='flex my-1'>
                  <img src="https://www.w3schools.com/w3images/avatar3.png" alt="" height="40" width="40" style={{borderRadius:"50%", marginRight:"4%"}} />
                  <div className='font-semibold text-slate-600'>
                    <p>By <span className='text-rose-500 font-bold'>john</span></p>
                    <p>Sun Oct 05,2022 06:30pm</p>
                  </div>
                </div>
              </div>
              {/* individual forum post */}
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
              {/* individual forum post */}
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
      </div>
    </div>
  );
};

export default index;
