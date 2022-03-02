import React, {useState} from 'react';

const AddNewCourse = () => {
    const [addCourse,setAddCourse] = useState({
        image:'',
        title:'',
        category:'',
        quiz:'',
        article:'',
        problemSolving:'',
        description:''
    });
    const handleOnBlur = e =>{
        const name = e.target.name;
        const value = e.target.value;
        const newField = {...addCourse}
        newField[name] = value;
        setAddCourse(newField);
        console.log(addCourse)
    }
    return (
        <div>
            <div className="grid grid-cols-1 mx-auto py-[5rem]">
                <div className="mb-6">
                    <h1 className="text-5xl	font-bold text-violet-900 text-center">Add new course</h1>
                </div>
                <div className="bg-slate-200 py-4">
                    <div className="px-7 md:w-3/5 lg:w-3/6 xl:w-2/6 flex flex-col mx-auto">
                        <form>
                            <input
                                type="text"
                                name="image"
                                onBlur={handleOnBlur}
                                placeholder="Image Url"
                                className="w-full py-3 mt-4 mb-2 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <input
                                type="text"
                                name="title"
                                onBlur={handleOnBlur}
                                placeholder="Title"
                                className=" w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <input
                                type="text"
                                name="category"
                                onBlur={handleOnBlur}
                                placeholder="category like beginer, html, css"
                                className=" w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <input
                                type="number"
                                name="quiz"
                                onBlur={handleOnBlur}
                                placeholder="no of quiz"
                                className=" w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                            />
                            <input
                                type="number"
                                name="article"
                                onBlur={handleOnBlur}
                                placeholder="no of articles"
                                className="w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                            />
                            <input
                                type="number"
                                name="problemSolving"
                                onBlur={handleOnBlur}
                                placeholder="no of problem solving"
                                className="w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                            />
                            <textarea
                                className="border-2 w-full h-[120px] outline-none py-3 px-3 resize-none rounded-lg mb-4 focus:outline-none focus:ring focus:ring-violet-300"
                                name="description"
                                placeholder="description"
                                onBlur={handleOnBlur}
                                required
                            ></textarea>
                            <button type="submit" className="bg-violet-900 text-white px-4 md:px-8 py-2 text-lg font-bold rounded-full shadow-md w-[100px] sm:w-[120px] md:w-[150px] lg:w-[150px] float-right">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCourse;