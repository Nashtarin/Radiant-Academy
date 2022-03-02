import Image from "next/image";
import Link from "next/link";
import moment from 'moment';
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const CourseCard = ({ course }) => {
    const { image, price, subtitle, title, url } = course;
    const [rating, setRating] = useState(0);
    const g = 5;

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
        <div className="border-2 rounded-lg text-center hover:bg-violet-100 transition duration-300 pb-6 px-3">
            <Image
                src={image}
                width="320px"
                height="350px"
                alt="Book Cover"
            />
            <h1 className='text-2xl	font-bold w-5/6 mx-auto text-violet-900 mb-4'>{title}</h1>
            <h3 className="px-2 mb-1">{subtitle}</h3>
            <p className="px-2">description</p>
            <div className="ratings flex">
                <ReactStars {...ratingCount} value={rating} edit={false} />
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
            <h5 className="px-5 text-lg my-2">$ {price}</h5>
            <div className="py-5">
                <Link href={url}>
                    <a className="bg-rose-500 rounded-lg text-white p-3 px-5 hover:bg-violet-800 transition duration-300 hover:text-white my-auto">Learn More</a>
                </Link>
            </div>
            <p className="text-stone-400">
                Added {/* {moment(review.createdAt).fromNow()} */}
            </p>
        </div>
    );
};

export default CourseCard;