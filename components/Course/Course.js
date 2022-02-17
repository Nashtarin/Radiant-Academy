import Image from "next/image";
import Link from "next/link";

const Course = ({course}) => {
    const {image,price,subtitle,title,url} = course;
    console.log(course)
    return (
        <div className="border-2 rounded-lg text-center hover:bg-violet-200 pb-6">
            {/* <Image 
            src={image}
            height="400"
            width="400"
            /> */}
            <img src={image} width="100%"/>
            <h1 className='text-2xl	font-bold text-violet-900 mb-5'>{title}</h1>
            <h1 className="mb-6">{subtitle}</h1>
            <Link href={url}>
                <a className="bg-violet-900 rounded-lg text-white p-3 mx-8 hover:bg-white hover:text-violet-900">Learn More</a>
            </Link>
            <span>{price}</span>
        </div>
    );
};

export default Course;