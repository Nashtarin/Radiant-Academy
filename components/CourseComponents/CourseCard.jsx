import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsFillCartCheckFill, BsFillCartDashFill } from 'react-icons/bs';
import Styles from '../../styles/Home.module.css';
import { addToWishlist, removeFromWishList } from '../../utilities/redux/slices/courseSlice';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';

const CourseCard = ({ course }) => {
    const dispatch = useDispatch();
    const { wishList } = useSelector((state) => state.courses);
    const isAddedToCart = wishList.find((cart) => cart._id === course._id);

    const handleCartADD = (course) => {
        dispatch(addToWishlist(course));
        toast.success("Successfully added to cart!", {
            position: "top-center"
        });
    }

    const handleCartRemove = (id) => {
        dispatch(removeFromWishList(id));
        toast.success("Successfully removed from cart!", {
            position: "top-center"
        });
    }

    return (
        <div>
            <div className="bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                <div className={Styles.imgContainer}>
                    <Image
                        src={course?.image}
                        alt="Course Cover"
                        className={Styles.courseCoverImage}
                        height="165px"
                        width="300px"
                        draggable="false"
                    />
                    <div className={Styles.middleBtn}>
                        <Link href={`/courses/${course?._id}`} passHref>
                            <button className="bg-slate-600 dark:bg-slate-400 text-white px-5 py-1.5 rounded-full flex items-center hover:shadow-lg">
                                Details <BsArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">{course?.title}</h4>
                    <p className="text-slate-400 text-[0.9em]">#html #css #beginners</p>
                    <p className="text-sm mt-2 px-2 text-stone-600 dark:text-slate-400">● 10 Quizzes ● 10 Articles <br /> ● 10 Problem Solving</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-5">
                    <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200"> <span>$</span> {course?.price}</h4>
                    {
                        isAddedToCart ? 
                        <div className="flex flex-col md:flex-row justify-center items-center" onClick={() => handleCartRemove(course._id)}>
                            <BsFillCartDashFill className='text-xl text-violet-900 dark:text-white'/>
                            <span className='my-auto mr-1 text-violet-900 dark:text-white text-xs cursor-pointer pt-1 pl-1 font-medium'>REMOVE FROM CART</span>
                        </div> :
                        
                        <div className="flex flex-col md:flex-row justify-center items-center" onClick={() => handleCartADD(course)}>
                            <BsFillCartCheckFill className='text-xl text-violet-900 dark:text-white'/>
                            <span className='my-auto mr-1 text-violet-900 dark:text-white text-xs cursor-pointer pt-1 pl-1 font-medium'>ADD TO CART</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseCard;