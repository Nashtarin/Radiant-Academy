import React, { useState } from 'react';
import Dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { topicCreate } from '../../utilities/redux/slices/forumSlice';

const QuillNoSSRWrapper = Dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'link'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { 'align': [] },
        ],
        [
            { 'color': [] },
            { 'background': [] },
            'image', 'video'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

const CreateTopicSection = () => {
    const categories = useSelector((state) => state.categories.categoriesList);

    const [postData, setPostData] = useState({ title: '', category: '', desc: '', author: 'Radiant Admin', authorImg: 'https://i.postimg.cc/4dNK0r0W/people-1.png', loves: 0, views: 0, status: false, featured: false });

    // const postTopic = async (postData) => {
    //     try {
    //         const res = await axios.post("http://localhost:3000/api/forums", postData);

    //         if (res.status === 201) {
    //             // dispatch(reset());
    //             // router.push(/orders/${res.postData._id});
    //         }

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
        setPostData({ title: '', category: '', desc: '', author: '', authorImg: '', loves: 0, views: 0, status: false, featured: false });
    };

    return (
        <div>
            <section className="py-20">
                <div className="text-center py-5">
                    <h1 className="text-4xl font-bold mt-8" style={{ color: '#3B058E' }}>Post Your Topic Here</h1>
                </div>
                <div className="text-center my-4 text-lg">
                    <p style={{ color: '#3B058E', display: 'none' }} id="success">Successfully added the outlet!</p>
                    <p style={{ color: '#F43F5E', display: 'none' }} id="error">There is a problem adding the outlet!</p>
                </div>
                <div className="grid grid-rows-2 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[350px_minmax(600px,_1fr)] gap-2 pt-3 pb-20 px-8 sm:px-12 md:px-20">
                    <div className="p-2">
                        <form className="flex justify-center flex-col" onSubmit={postTopic}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Topic Title"
                                className="bg-slate-200 w-full py-2 px-3 outline-none mt-3.5 text-lg rounded-lg font-semibold"
                                required
                                value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                            />
                            <select
                                name="category"
                                className="block appearance-none w-full bg-slate-200 py-3 px-4 pr-8 rounded-lg leading-tight outline-none my-5 text-lg"
                                required
                                value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })}
                            >
                                <option>Select a Category</option>
                                {
                                    categories.data.map(category =>
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
                        {/* <QuillNoSSRWrapper
                            modules={modules}
                            formats={formats}
                            theme="snow"
                            className="h-[135px] sm:h-[210px] md:h-[260px] lg:h-[235px]"
                        /> */}
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