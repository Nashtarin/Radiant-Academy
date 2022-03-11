/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
    BsArrowRight, BsEyeFill,
    BsFillClockFill,
    BsHash
} from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { topicReact } from '../../utilities/redux/slices/forumSlice';

const TopicCard = ({ forum }) => {
    const { _id, title, desc, createdAt, category, loves, views, status } = forum;
    const [reacts, setReacts] = useState(loves);

    useEffect(() => {
        //checking liked for color
        const exists = getStorage();

        let color_cart = {};
        if (exists) {
            color_cart = JSON.parse(exists);
            if (color_cart[_id]) {
                document.getElementById(`icon-heart-${_id}`).classList.add('text-rose-500');
            }
        }
    }, [views])

    const dispatch = useDispatch();
    //love react
    const handleReact = (id) => {
        const loading = toast.loading('Please wait ...');
        let liked = false;

        const alreadyLiked = addToStorage(id, liked);

        if (alreadyLiked) {
            toast.dismiss(loading);
            toast("You've already liked it!", {
                icon: '🥳',
            });
        } else {
            dispatch(topicReact(forum));
            document.getElementById(`icon-heart-${id}`).classList.add('text-rose-500');
            setReacts(reacts + 1);
            toast.dismiss(loading);
            toast.success("You've liked the post!");
        }
    }

    //local storage utilities
    const addToStorage = (id, liked) => {
        const exists = getStorage();

        let react_cart = {};
        if (!exists) {
            react_cart[id] = 1;
            liked = false;
        }
        else {
            react_cart = JSON.parse(exists);
            if (react_cart[id]) {
                const newCount = react_cart[id] + 1;
                react_cart[id] = newCount;
                liked = true;
            }
            else {
                react_cart[id] = 1;
                liked = false;
            }
        }
        updateStorage(react_cart);
        return liked;
    }

    const getStorage = () => localStorage.getItem('liked_id');

    const updateStorage = cart => {
        localStorage.setItem('liked_id', JSON.stringify(cart));
    }



    return (
        <div className='grid grid-rows-1 sm:grid-cols-3 my-5 mx-5 bg-slate-100 rounded-md shadow-md pt-5 dark:bg-slate-700'>
            <div className='col-span-2 px-4 sm:px-8'>
                <h1 className='text-2xl font-bold text-violet-800 my-2 dark:text-violet-400'>{title}</h1>
                <p className='text-slate-500 dark:text-slate-200'>{desc.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}...</p>
                <div className='w-5/6'>
                    <div className='grid sm:grid-rows-2 gap-y-1 lg:grid-cols-2 pt-3'>
                        <div>
                            <p className='flex items-center font-semibold text-slate-700 text-lg dark:text-slate-200'>
                                <span className='my-auto mr-1.5'><BsFillClockFill /></span> {moment(createdAt).fromNow()}
                            </p>
                        </div>
                        <div className='grid grid-cols-3'>
                            <p className='flex items-center font-semibold text-slate-700 mr-5 text-lg dark:text-slate-200'>
                                <span className='my-auto'><BsHash /></span>{category}
                            </p>
                            <p className='flex justify-center items-center font-semibold text-slate-700 mr-5 dark:text-slate-200'>
                                <span className='my-auto mr-1 text-violet-900 dark:text-violet-400'><BsEyeFill /></span>{views}
                            </p>
                            <p className='flex items-center font-semibold mr-5 text-lg dark:text-slate-200'>
                                <span className='my-auto mr-1 cursor-pointer  text-slate-600 dark:text-slate-500' onClick={() => handleReact(_id)}><i className="fa fa-heart" id={`icon-heart-${_id}`}></i></span>{reacts}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 sm:col-span-1 pt-5 ps-12 sm:pr-8 flex justify-center sm:justify-end items-center'>
                <Link href={`/forum/${_id}`} passHref>
                    <button className='rounded-3xl bg-rose-500 text-white font-semibold py-2 px-6 hover:bg-slate-700 dark:hover:bg-slate-800 hover:text-white duration-300 inline-flex items-center justify-center'>
                        Read More <BsArrowRight className='ml-1' />
                    </button>
                </Link>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default TopicCard;