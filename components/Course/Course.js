<<<<<<< HEAD
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
=======
>>>>>>> Jahid
import Link from "next/link";

const Course = ({ course }) => {
    const { image, price, subtitle, title, url } = course;
    console.log(course)
    return (
        <div className="border-2 rounded-lg text-center hover:bg-violet-100 transition duration-300 pb-6">
            {/* <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt=""
            /> */}
            <img src={image} width="100%" />
            <h1 className='text-2xl	font-bold w-5/6 mx-auto text-violet-900 mb-5'>{title}</h1>
            <h1 className="mb-6 w-5/6 mx-auto">{subtitle}</h1>
            <div className="py-5">
                <Link href={url}>
                    <a className="bg-rose-500 rounded-lg text-white p-3 px-5 hover:bg-violet-800 transition duration-300 hover:text-white">Learn More</a>
                </Link>
            </div>
            <span className="px-5">{price}</span>
        </div>
    );
};

export default Course;