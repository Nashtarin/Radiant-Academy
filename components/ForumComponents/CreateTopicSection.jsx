import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../utilities/Hooks/useAuth';
import { topicCreate } from '../../utilities/redux/slices/forumSlice';

const CreateTopicSection = () => {
    const { user } = useAuth();
    const categories = useSelector((state) => state.categories.categoriesList);

    const [postData, setPostData] = useState({ title: '', category: '', desc: '', author: `${user.name}`, authorEmail: `${user.email}`, authorImg: 'https://i.postimg.cc/4dNK0r0W/people-1.png', loves: 0, views: 0, status: false, featured: false });

    const dispatch = useDispatch();
    const postTopic = e => {
        if (dispatch(topicCreate(postData))) {
            document.getElementById('success').style.display = 'block';
            clear();
        } else {
            document.getElementById('error').style.display = 'block';
        }
        e.preventDefault();
    }

    const clear = () => {
        setPostData({ title: '', category: '', desc: '', authorImg: '', loves: 0, views: 0, status: false, featured: false });
    };

    return (
        <div>
            <section className="py-10">
                <div className="text-center py-5">
                    <h1 className="text-4xl font-bold mt-8" style={{ color: '#3B058E' }}>Post Your Topic Here</h1>
                </div>
                <div className="text-center my-4 text-lg">
                    <p style={{ color: '#3B058E', display: 'none' }} id="success">Successfully added the Forum Post!</p>
                    <p style={{ color: '#F43F5E', display: 'none' }} id="error">There is a problem adding the Forum Post!</p>
                </div>
                <div className="grid grid-rows-2 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[350px_minmax(600px,_1fr)] gap-2 pb-20 px-8 sm:px-12 md:px-20">
                    <div className="p-2">
                        <form className="flex justify-center flex-col" onSubmit={postTopic}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Topic Title"
                                className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-semibold"
                                required
                                value={postData.title}
                                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
                                        <option key={category._id} >{category.subTitle}</option>
                                    )
                                }
                            </select>
                            <input
                                type="text"
                                name="hashtags"
                                placeholder="Hashtags"
                                className="bg-slate-200 w-full py-2 px-3 outline-none text-lg rounded-lg mb-8"
                            />
                            <button type="submit" className="bg-rose-500 text-white font-bold px-12 py-2 text-lg rounded-lg tracking-wider w-2/4 lg:w-full mx-auto"
                            >POST</button>
                        </form>
                    </div>
                    <div className="h-[300px] md:h-[300px] py-2 px-2">
                        <textarea
                            name="desc"
                            cols="30"
                            rows="10"
                            placeholder="Describe your topic here.."
                            className="bg-slate-200 w-full py-2 px-3 outline-none text-lg rounded-lg mb-8"
                            value={postData.desc}
                            onChange={(e) => setPostData({ ...postData, desc: e.target.value })}>
                        </textarea>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateTopicSection;