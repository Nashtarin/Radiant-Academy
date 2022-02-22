import React from 'react';
import TextEditorSection from '../TextEditorSection/TextEditorSection';

const CreatePostSection = () => {
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold mt-8" style={{ color: '#3B058E' }}>Post Your Topic Here</h1>
            </div>
            <div className="grid grid-rows-2 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[350px_minmax(600px,_1fr)] gap-2 pt-3 pb-12 px-8 sm:px-12 md:px-20">
                <div className="p-2">
                    <form className="flex justify-center flex-col">
                            <input type="text" name="title" placeholder="Topic Title"  className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-bold" required />
                            <input type="text" name="title" placeholder="Topic Category" className="bg-slate-200 w-full py-2 px-3 outline-none my-5 text-lg rounded-lg" required />
                            <input type="text" name="title" placeholder="Hashtags" className="bg-slate-200 w-full py-2 px-3 outline-none text-lg rounded-lg mb-8" required />
                            <button type="submit" className="bg-rose-500 text-white font-bold px-12 py-2 text-lg rounded-lg tracking-wider w-2/4 lg:w-full mx-auto">POST</button>
                        </form>
                </div>
                <div className="h-[300px] md:h-[300px] py-2 px-2">
                    <TextEditorSection />
                </div>
            </div>
        </div>
    );
};

export default CreatePostSection;