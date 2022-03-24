import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../utilities/Hooks/useAuth';
import { addReview } from '../../utilities/redux/slices/reviewSlice';

const ReviewSection = ({ forum }) => {
    const dispatch = useDispatch();
    const { _id, author, authorImg } = forum;
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const allReviews = useSelector((state) => state.reviews.reviewsList);
    const { user } = useAuth();
    console.log(forum)

    useEffect(() => {
        const thisReview = allReviews.filter(review => review.forumId === _id);
        setReviews(thisReview);
    }, [allReviews, _id])

    //rating system
    const ratingCount = {
        size: 0,
        count: 5,
        color: "black",
        activeColor: "red",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue);
        }
    };

    const commentRef = useRef();
    const postReview = (e) => {
        const loading = toast.loading('Please wait ...');
        toast.dismiss(loading);
        const comment = commentRef.current.value;
        const forumId = _id;
        const status = true;

        const reviewData = { forumId, author, authorImg, comment, rating, status };
        if (dispatch(addReview(reviewData))) {
            toast.dismiss(loading);
            toast.success("Successfully added your review!", {
                position: "bottom-center"
            });
            e.target.reset();
        } else {
            toast.dismiss(loading);
            toast.error('Something went wrong!');
        }

        e.preventDefault();
    }

    return (
        <div className="px-12 lg:px-20">
            <div className="lg:px-12 pb-10 h-full">
            {reviews.length > 0 ? <button className="px-8 py-2 text-white rounded-lg text-lg mb-4 bg-[#F05133]">Comments ({reviews.length})</button>
            : <button className="px-8 py-2 text-white rounded-lg text-lg mb-4 bg-[#F05133]">Comment ({reviews.length})</button>}
                
                <div className="bg-slate-100 pb-12 dark:bg-slate-700">
                    {/* Display Comment */}
                    <div>
                        {
                            reviews.map((review) => (
                                <div className="p-2 sm:p-5 flex items-start" key={review._id}>
                                    <div className="px-2 pt-1.5 block w-[70px]">
                                        <Image
                                            src={user?.photo}
                                            alt="User Picture"
                                            height="100px"
                                            width="100px"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                            <h4 className="text-xl dark:text-slate-100">{user.name}</h4>
                                            &nbsp; - &nbsp;
                                            <p className="text-stone-400">{moment(review.createdAt).fromNow()}</p>
                                        </div>
                                        <p className="text-sm px-2 pt-1 dark:text-slate-200">{review.comment}</p>
                                        <div className="ratings flex">
                                            <ReactStars {...ratingCount} value={review.rating} edit={false} />
                                            <style jsx global>{`
                                                .ratings {
                                                    margin: 1rem;
                                                }
                                                .ratings span i{
                                                    color: #f4dd1e;
                                                    font-size: 1.25rem;
                                                }
                                            `}</style>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Add Comment */}
                    <div className="px-6 lg:px-12 py-8 h-full bg-white dark:bg-slate-700">
                        <form onSubmit={postReview}>
                            <textarea ref={commentRef} className="bg-stone-100 dark:bg-slate-500 text-black dark:text-white border-2 w-full h-[100px] outline-none py-2 px-3 resize-none rounded-lg" placeholder="Type your comment here!" required></textarea>
                            <div className="drop-rating flex flex-col sm:flex-row">
                                <h3 className="text-xl pb-2 sm:pb-0 text-slate-700 dark:text-slate-200">Select your Rating:</h3>
                                <ReactStars {...ratingCount} />
                                <style jsx global>
                                    {`
                                        .drop-rating {
                                            padding: 1rem;
                                        }
                                        .drop-rating h3{
                                            padding-right: 1rem;
                                        }
                                        .drop-rating span i{
                                            color: #f4dd1e;
                                            font-size: 1.5rem;
                                        }
                                    `}
                                </style>
                            </div>
                            <button type="submit" className="text-lg px-8 py-1.5 rounded-full float-right uppercase bg-[#FFCA30]">Comment</button>
                        </form>
                    </div>
                </div>
            </div >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ReviewSection;