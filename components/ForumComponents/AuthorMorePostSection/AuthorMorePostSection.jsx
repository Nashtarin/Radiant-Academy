import React from 'react';

const AuthorMorePostSection = () => {
    return (
        <div className="px-5 pb-5">
            <div className="bg-slate-100 drop-shadow-md py-3 px-4 flex justify-center items-center flex-col rounded-lg">
                <div className="border-b-2" style={{ borderColor: '#F05133' }}>
                    <h2 className="text-xl mb-3">More Post From <span style={{ color: '#F05133' }}>Author Name</span></h2>
                </div>
                <div className="my-2">
                    <div className="my-3">
                        <h3 className="text-xl">Read About Facebook</h3>
                        <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                        <button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button>
                    </div>
                    <div>
                        <h3 className="text-xl">Read About Facebook</h3>
                        <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                        <button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorMorePostSection;