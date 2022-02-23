import Image from "next/image";

export const getStaticPaths = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(course => {
        return {
            params: {
                courseId: course.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.courseId;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`; //this is not an api
    const res = await fetch(url);
    const course = await res.json();

    return {
        props: {
            course,
        },
    }
}
const singleCourse = ({ course }) => {
    const { title, id, body } = course;

    return (
        <div className="border-2 rounded-lg text-center hover:bg-violet-200 pb-6">
            {/* <Image 
            src={image}
            height="400"
            width="400"
            /> */}
            {/* <img src={image} width="100%"/> */}
            <h1 className='text-2xl	font-bold text-violet-900 mb-5'>{title}</h1>
            <h1 className="mb-6">{title}</h1>
            <span>{body}</span>
        </div>
    )
}

export default singleCourse;