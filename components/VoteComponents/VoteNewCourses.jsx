import VoteCard from "./VoteCard";

const VoteNewCourses = ({ vote }) => {
    return (
        <div className='bg-white dark:bg-slate-800 min-h-screen w-5/6 mx-auto'>
            <div className="text-center pt-[4rem] pb-14">
                <h1 className=" text-4xl text-violet-900 dark:text-violet-400 font-semibold">Vote Upcoming Courses</h1>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[80%] md:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5">
                    {
                        vote?.data?.map(votes => (
                            <VoteCard votes={votes} key={votes._id} />
                        ))
                    }
                </div>
                <div className="lg:w-[20%] bg-slate-100 dark:bg-[#37465b] text-slate-700 dark:text-slate-200 p-10 text-center  rounded-lg">
                    <h2 className="text-2xl pb-5">Total votes</h2>
                    <h3 className="text-6xl font-bold">00</h3>

                </div>
            </div>
        </div>

    );
};

export default VoteNewCourses;