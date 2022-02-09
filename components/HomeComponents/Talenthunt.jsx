import Image from 'next/image';
import React from 'react';

const Talenthunt = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='flex flex-col-reverse justify-center items-center lg:flex-row gap-4'>
                <div className="w-5/6 lg:w-[50%] py-14">
                    <div className="w-5/6 mx-auto">
                        <Image src="/talent.webp" alt="talent hunt image"
                            width="562"
                            height="438"
                        />
                    </div>
                </div>
                <div className="w-5/6 lg:w-[50%] py-14">
                    <h1 className='text-4xl font-bold text-violet-900 my-5'>Grab your place</h1>
                    <p className='text-black text-xl mb-5'>Enjoy the thrilling experience of our Live talent hunt <br /> with Radiant Academy. </p>
                    <button className="bg-rose-500 rounded-md text-white px-7 py-3 my-5">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Talenthunt;