import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { addReview } from '../../utilities/redux/slices/reviewSlice';
import { useDispatch } from 'react-redux';

const ReviewSection = ({forum}) => {
    const { _id, author, authorImg } = forum;

    const [rating, setRating] = useState(0);

    const [reviews, setReviews] = useState([]);
    const allReviews = useSelector((state) => state.reviews.reviewsList);
    useEffect(() => {
        const thisReview  = allReviews.data.filter(review =>  review.forumId === _id);
        setReviews(thisReview);
    }, [allReviews.data])

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

    const dispatch = useDispatch();
    const commentRef = useRef();
    const postReview = (e) => {
        // const loading = toast.loading('Please wait ...');
        // toast.dismiss(loading);
        const comment = commentRef.current.value;
        const forumId = _id;
        const status = true;

        const reviewData = { forumId, author, authorImg, comment, rating, status };
        if(dispatch(addReview(reviewData))){
            // toast.dismiss(loading);
            // toast.success("Successfully added your review!", {
            //     position: "bottom-center"
            // });
            e.target.reset();
        }else{
            // toast.dismiss(loading);
            // toast.error('Something went wrong!');
        }

        e.preventDefault();
    }

    return (
        <div className="px-12 lg:px-20">
            <div className="lg:px-12 pb-10 h-full">
                <button className="px-8 py-2 text-white rounded-lg text-lg mb-4" style={{ backgroundColor: '#F05133' }}>Review (2)</button>
                <div className="bg-slate-100 pb-12">
                    {/* Display Comment */}
                    <div>

                        {
                            reviews.map((review) => (
                                <div className="p-2 sm:p-5 flex items-start" key={review._id}>
                                    <div className="px-2 pt-1.5 block w-[70px]">
                                        <Image
                                            src="https://i.postimg.cc/4dNK0r0W/people-1.png"
                                            alt="User Picture"
                                            height="100px"
                                            width="100px"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                            <h4 className="text-xl">{review.author}</h4>
                                            &nbsp; - &nbsp;
                                            <p className="text-stone-400">{moment(review.createdAt).fromNow()}</p>
                                        </div>
                                        <p className="text-sm px-2 pt-1">{review.comment}</p>
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
                    <div className="px-6 lg:px-12 py-8 h-full">
                        <form onSubmit={postReview}>
                            <textarea ref={commentRef} className="bg-stone-100 border-2 w-full h-[100px] outline-none py-2 px-3 resize-none rounded-lg" placeholder="Type your comment here!" required></textarea>
                            <div className="drop-rating flex flex-col sm:flex-row">
                                <h3 className="text-xl mb-2 sm:mb-0">Select your Rating:</h3>
                                <ReactStars {...ratingCount} />
                                <style jsx global>
                                    {`
                                        .drop-rating {
                                            margin: 1rem;
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
                            <button type="submit" className="text-lg px-8 py-1.5 rounded-full mt-3 float-right" style={{ backgroundColor: '#FFCA30' }}>Comment</button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ReviewSection;