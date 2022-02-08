import React from 'react';

const Talenthunt = () => {
    return (
        <div className='container mx-auto my-5'>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div>
                <img src="/talent.webp" alt="talent hunt image" className='w-100' />
            </div>
            <div className='mx-auto px-5'>
                <h1 className='text-4xl font-bold text-violet-900 my-5'>Grab your place</h1>
                <p className='text-black text-xl mb-5'>Enjoy the thrilling experience of our Live talent hunt <br /> with Radiant Academy. </p>
                <button className='border rounded-3xl px-4 py-2 bg-yellow-500 font-bold text-white'>Create Account</button>
            </div>
        </div>
        </div>
    );
};

export default Talenthunt;