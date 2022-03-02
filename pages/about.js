import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const about = () => {
    return (
        <section className=''
        style={{backgroundImage:"url('https://i.ibb.co/ZhY2n1C/coverBg.png')", backgroundRepeat:'repeat', backgroundAttachment:'fixed'}}
        >
            <Zoom>
                <h1 className='text-center text-white text-4xl font-bold py-5'>
                    Welcome To Radiant Academy.
                </h1>
            </Zoom>
            <Fade>
            <div className='container mx-auto grid md:grid-cols-2 xs:grid-cols-1 gap-5 mb-5'>

                
                <div className='text-white mx-5'>
                    <h1 className='text-center font-semibold text-xl my-5'>Who We Are</h1>
                    <p className='text-slate-400'>We as a platform of about hundred plus lecturer around the world with thousand plus pre organized courses serving more then millions of studends and learners throught the globe. We are growing everyday, According to the past years of experiences we are building our platform more accessible and constantly adding new features for our students and teachers.</p>
                </div>
                <div className='text-white mx-5'>
                    <h1 className='text-center font-semibold text-xl my-5'>Our Mission</h1>
                    <h1 className='text-rose-500 text-lg'>Spreading Knowledge At Low Cost.</h1>
                    <p className='text-slate-400'>we are dedicated to provide recogniseable and remarkable courses throught the world on les cost then other competitor so that everyone around the world can access their desired Knowledgeand.</p>
                    <h1 className='text-center font-semibold text-xl my-5'>Our Vission</h1>
                    <h1 className='text-rose-500 text-lg'>Providing Education All Over The World</h1>
                    <p className='text-slate-400'>Our key motive is to reach those countries and places where education is a burden over family expenses and provide mandatory education so that the future of the world does not rely on un professional and illiterate people.</p>
                </div>
            </div>
            <div className='py-5 container mx-auto grid md:grid-cols-2 xs:grid-cols-1'>
                <div className='text-white mx-5'>
                    <h1 className='text-rose-500 text-lg font-semibold'>Subscribe To Our Newslater Today</h1>
                    <p className='text-slate-400 text-sm'>No bloats and zero spams. Be the first to join.</p>
                </div>
                <div className='mx-5'>
                    <input type="text" placeholder='Enter your E-mail' className='p-3 rounded-md focus:outline-none mr-3'/>
                    <button className='btn bg-rose-500 rounded-md border-0'>Subscribe</button>
                </div>
            </div>
            </Fade>
        </section>
    );
};

export default about;