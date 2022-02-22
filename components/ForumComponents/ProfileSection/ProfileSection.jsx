import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaEye, FaHashtag, FaHeart } from "react-icons/fa";

const ProfileSection = () => {
    return (
        <div className="px-5 pb-5">
            <div className="bg-slate-100 drop-shadow-md p-10 flex justify-center items-center flex-col rounded-lg">
                <div>
                    <Image src="/img/people-3.png" alt="User Profile Picture" width="100px" height="100px" />
                </div>
                <div className="mt-3">
                    <h3 className="text-xl text-center">Author Name</h3>
                    <div>
                        <p className="mt-2 flex items-center"><FaCalendarAlt /> &nbsp; Publishing Date</p>
                        <p className="flex items-center"><FaHashtag /> &nbsp; Welcome, RadiantAcademy</p>
                        <p className="flex items-center"><FaEye style={{color: ''}} /> &nbsp; 1214</p>
                        <p className="flex items-center"><FaHeart style={{color: 'red'}} /> &nbsp; 300</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;