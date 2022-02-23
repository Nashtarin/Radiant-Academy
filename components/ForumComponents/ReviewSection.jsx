import React, { useState } from 'react';
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";

const ReviewSection = () => {
    const [rating, setRating] = useState(0);

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

    return (
        <div className="lg:px-12 pb-10 h-full">
            <button className="px-8 py-2 text-white rounded-lg text-lg mb-4" style={{ backgroundColor: '#F05133' }}>Review (2)</button>
            <div className="bg-slate-100 pb-12">
                {/* Display Comment */}
                <div>
                    <div className="p-2 sm:p-5 flex items-start">
                        <div className="px-2 pt-1.5 block w-[70px]">
                            <Image
                                src="https://i.postimg.cc/mgXq8dJx/1645616273884.png"
                                alt="User Picture"
                                height="100px"
                                width="100px"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                <h4 className="text-xl">John Doe</h4>
                                &nbsp; - &nbsp;
                                <p className="text-stone-400">16:51, 22 February, 2022</p>
                            </div>
                            <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nisl, ac nunc rutrum ut. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing tortor elit, ornare lorem facilisi purus. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing tortor elit, ornare lorem facilisi purus.</p>
                            <div className="ratings flex">
                                <ReactStars {...ratingCount} value={rating} edit={false} />
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
                    <div className="p-2 sm:p-5 flex items-start">
                        <div className="px-2 pt-1.5 block w-[70px]">
                            <Image
                                src="https://i.postimg.cc/xdXZ7vVX/1645616273853.png"
                                alt="User Picture"
                                height="100px"
                                width="100px"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                <h4 className="text-xl">Jane Diana</h4>
                                &nbsp; - &nbsp;
                                <p className="text-stone-400">14:35, 22 February, 2022</p>
                            </div>
                            <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nisl, ac nunc rutrum ut. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing.</p>
                            <div className="ratings flex">
                                <ReactStars {...ratingCount} value={rating} edit={false} />
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
                </div>

                {/* Add Comment */}
                <div className="px-6 lg:px-12 py-8 h-full">
                    <form>
                        <textarea className="bg-stone-100 border-2 w-full h-[100px] outline-none py-2 px-3 resize-none rounded-lg" placeholder="Type your comment here!" required></textarea>
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
    );
};

export default ReviewSection;