import VoteCard from "./VoteCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VoteNewCourses = () => {
    const allVotes = useSelector((state) => state.votes.votesList);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        allVotes.forEach((item, i) => {
            total += item.votesTotal;
            setTotalPrice(total);
        })
    }, [allVotes]);

    return (
        <div className='bg-white dark:bg-slate-800 min-h-screen w-5/6 mx-auto'>
            <div className="text-center pt-[4rem] pb-14">
                <h1 className=" text-4xl text-violet-900 dark:text-violet-400 font-semibold">Vote Upcoming Courses</h1>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[80%] md:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5">
                    {
                        allVotes.map(votes => (
                            <VoteCard votes={votes} key={votes._id} />
                        ))
                    }
                </div>
                <div className="lg:w-[20%] my-10 bg-slate-100 dark:bg-[#37465b] text-slate-700 dark:text-slate-200 p-10 text-center  rounded-lg flex flex-col justify-center" style={{maxHeight:'365px'}}>
                    <h2 className="text-2xl pb-5">Total votes</h2>
                    <h3 className="text-6xl font-bold">{totalPrice}</h3>

                </div>
            </div>
        </div>

    );
};

export default VoteNewCourses;