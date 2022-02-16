// export default function index() {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-5xl font-bold text-center">Welcome To Our Fourm</h1>

//     </div>
//   )
// }
import React from 'react';

export const forumapi = async ()=>{
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  // return{
  //     props:{
  //         data
  //     }
  //   }
  //   console.log(data);
}

const index = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>
        Welcome to our forum
      </h1>
      <div className='grid container mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
        {/* <div className='overflow-hidden border rounded-md'>
          <div className="bg-[url('https://www.themebeta.com/files/windows/images/202009/16/b17482d63e757954009b0fb3ea4654ae.jpeg')] hover:scale-110 duration-300 bg-cover border rounded-md overflow-hidden">
          <h1 className='text-3xl text-center font-bold text-white'>hello how are you</h1>
         </div>
        </div> */}
       <div className='overflow-hidden border rounded-md my-5'>
          <div className="bg-[url('https://www.themebeta.com/files/windows/images/202009/16/b17482d63e757954009b0fb3ea4654ae.jpeg')] hover:scale-110 duration-300 bg-cover h-40 ">
            {/* hello how are you */}
          <h1 className='text-xl text-center font-bold items text-slate-400'>Locked Forum With Latest Topics</h1>
         </div>
         <p className='text-lg m-2 font-semibold text-slate-400'>Click the explore button be directed somewhere magical </p>
         <hr />
         <span className='mx-2 font-medium'>10 topics</span>
         <span className='mx-2 font-medium'>50 posts</span>
         <button className='bg-rose-500 rounded-full px-3 my-2 py-1 text-white font-medium ml-8 hover:bg-slate-700 duration-300'>Explore</button>
       </div>
      </div>
    </div>
  );
};

export default index;
