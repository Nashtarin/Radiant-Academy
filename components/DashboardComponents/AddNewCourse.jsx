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
            <div className="grid grid-cols-1 mx-auto py-[5rem] bg-slate-100">
                <div className="pb-6">
                    <h1 className="text-4xl font-bold text-center">Add New Course</h1>
                </div>
                <div className="px-7 md:w-3/5 lg:w-3/6 xl:w-2/6 flex flex-col mx-auto">
                    <form>
                        <input
                            type="text"
                            name="title"
                            placeholder="Course Title"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="subtitle"
                            placeholder="Course Subtitle"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-3"
                            required
                        />
                        <textarea
                            className="bg-slate-200 border-2 w-full h-[100px] outline-none py-2 px-3 resize-none rounded-lg mb-1"
                            name="message"
                            placeholder="Course Description"
                            required
                        ></textarea>
                        <input
                            type="text"
                            name="image"
                            placeholder="Course Image URL"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-3"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Course Price"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-3"
                            required
                        />
                        <input
                            type="number"
                            name="rating"
                            placeholder="Course Ratings"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-4"
                            required
                        />
                        <button type="submit" className="px-4 md:px-8 py-2 text-lg font-bold rounded-full shadow-md w-[100px] sm:w-[120px] md:w-[150px] lg:w-[150px] float-right dark:text-slate-700 text-black" style={{ backgroundColor: '#FFCA30' }}>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCourse;