import React, { useState } from 'react';
import { FaClone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useAuth from '../../utilities/Hooks/useAuth';
import DashboardSidebar from './DashboardSidebar';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";
import axios from 'axios';
import { courseCreate } from '../../utilities/redux/slices/courseSlice';

const AddNewCourse = () => {
    const router = useRouter();
    const [imageStore, setImageStore] = useState({});

    const categories = [
        {
            "id": 1,
            "category": "premium",
        },
        {
            "id": 2,
            "category": "free",
        },
        {
            "id": 3,
            "category": "upcoming",
        },
        {
            "id": 4,
            "category": "html",
        },
        {
            "id": 5,
            "category": "css",
        },
        {
            "id": 6,
            "category": "javascript",
        },
    ]

    const [postData, setPostData] = useState({ title: '', subtitle: '', category: '', description: '', image: '', price: 0, rating: 4.5, enrolled: 0, contents: [] });
    console.log(postData);

    const dispatch = useDispatch();
    const postTopic = e => {
        const loading = toast.loading('Please wait ...');
        axios.post('https://api.imgbb.com/1/upload', imageStore)
        .then(function (response) {
            postData.image = response.data.data.display_url;
            if (dispatch(courseCreate(postData))) {
                toast.dismiss(loading);
                toast.success("Successfully added a new topic!", {
                    position: "top-center"
                });
                clear();
                router.replace('/dashboard/courses');
            } else {
                toast.dismiss(loading);
                toast.error('Something went wrong!');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
        e.preventDefault();
    }

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', '82e5344b858660378c234022265f1537');
        imageData.append('image', e.target.files[0]);

        setImageStore(imageData);
        e.preventDefault();
    }

    const clear = () => {
        setPostData({ title: '', subtitle: '', category: '', description: '', image: '', price: 0, rating: 0, enrolled: 0, contents: [] });
    };

    return (
        <div className='px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800 text-slate-700'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5'>
                <section>
                    <DashboardSidebar />
                </section>
                <section className='bg-white dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center dark:text-slate-200"><FaClone className="mr-3" /> Add New Course</h3>
                    </div>
                    <section className="overflow-x-auto pt-10">
                        <div className="grid grid-rows-2 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[350px_minmax(600px,_1fr)] gap-2 pb-20 px-8 sm:px-12 md:px-20">
                            <div className="p-2">
                                <form className="flex justify-center flex-col" onSubmit={postTopic}>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Course Title"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-semibold mb-5"
                                        required
                                        value={postData.title}
                                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                                    />
                                    <input
                                        type="file"
                                        multiple={false}
                                        name="hashtags"
                                        placeholder="image"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none text-lg rounded-lg"
                                        onChange={handleImageUpload}
                                    />
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Course Price"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-semibold"
                                        required
                                        value={postData.price}
                                        onChange={(e) => setPostData({ ...postData, price: e.target.value })}
                                    />
                                    <select
                                        name="category"
                                        className="block appearance-none w-full bg-slate-200 py-3 px-4 pr-8 rounded-lg leading-tight outline-none my-5 text-lg"
                                        required
                                        value={postData.category}
                                        onChange={(e) => setPostData({ ...postData, category: e.target.value })}
                                    >
                                        <option>Select a Category</option>
                                        {
                                            categories.map(category =>
                                                <option key={category.id} >{category.category}</option>
                                            )
                                        }
                                    </select>
                                    <button type="submit" className="bg-rose-500 text-white font-bold px-12 py-2 text-lg rounded-lg tracking-wider w-2/4 lg:w-full mx-auto"
                                    >POST</button>
                                </form>
                            </div>
                            <div className="h-[300px] md:h-[300px] py-2 px-2">
                                <input
                                    type="text"
                                    name="subtitle"
                                    placeholder="Course Sub Title"
                                    className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-semibold mb-4"
                                    required
                                    value={postData.subtitle}
                                    onChange={(e) => setPostData({ ...postData, subtitle: e.target.value })}
                                />
                                <textarea
                                    name="description"
                                    cols="30"
                                    rows="8"
                                    placeholder="Describe course details here.."
                                    className="bg-slate-200 w-full py-2 px-3 outline-none text-lg rounded-lg mb-8"
                                    value={postData.description}
                                    onChange={(e) => setPostData({ ...postData, description: e.target.value })}>
                                </textarea>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddNewCourse;