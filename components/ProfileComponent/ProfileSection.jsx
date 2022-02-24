import React, { useState } from 'react';
import Image from 'next/image';
import { FaClock, FaPenNib, FaHeart, FaBookmark } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import DashboardSection from './DashboardSection';

const ProfileSection = () => {
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
        <div>
            <div className="grid grid-rows-1 md:grid-cols-[300px_minmax(300px,_1fr)] lg:grid-cols-[350px_minmax(600px,_1fr)] m-2">
                <div className="bg-slate-200 m-5 rounded-lg py-6 flex justify-center">
                    <div className="flex-col text-center">
                        <div>
                            <Image
                                src="https://i.postimg.cc/vZHk7RPL/1645616273912.png"
                                alt="Profile Picture"
                                width="100px"
                                height="100px"
                            />
                        </div>
                        <div className="py-2">
                            <h2 className="text-xl font-bold">Iftakher Hossen</h2>
                            <p className="text-stone-500">iftakher.one@gmail.com</p>
                        </div>
                        <div>
                            <p className="mt-3 flex items-center mb-1">
                                <FaClock className="mr-2" />Joined: Feb 01, 2022
                            </p>
                            <p className="flex items-center mb-1">
                                <FaPenNib className="mr-2" />Topics: 13</p>
                            <p className="flex items-center mb-1">
                                <FaHeart className="mr-2" style={{ color: '' }} />Reputations: 1214
                            </p>
                            <p className="flex items-center mb-1">
                                <FaBookmark className="mr-2" style={{ color: 'red' }} />Rank: Collaborator
                            </p>
                        </div>
                        <div className="py-3 text-center">
                            <h5 className="text-lg">Overall Rating</h5>
                            <div className="ratings flex">
                                <ReactStars {...ratingCount} value={rating} edit={false} /> (50)
                                <style jsx global>
                                    {`
                                        .ratings {
                                            margin: 1rem;
                                        }
                                        .ratings span i{
                                            color: #f4dd1e;
                                            font-size: 1.25rem;
                                        }
                                    `}
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 m-5 rounded-md">
                    <DashboardSection />
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;