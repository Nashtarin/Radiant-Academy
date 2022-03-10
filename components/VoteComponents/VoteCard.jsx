import Image from "next/image";

const VoteCard = ({ votes }) => {
    return (
        <div className="text-slate-700 dark:text-slate-200 ">
            <div className="bg-slate-100 dark:bg-[#37465b] p-5  rounded-lg card-single">

                <div>
                    <div className="flex justify-center">
                        <Image
                            src={votes?.image}
                            alt="Course Cover"
                            width="300px"
                            height="165px"
                            draggable="false"
                        />
                    </div>
                    <h1 className="text-xl py-2 font-semibold"> {votes?.title} </h1>
                    <h1> <span>$</span> {votes?.price} </h1>
                    <p className="text-slate-400 text-[0.9em]">#javascript #intermidiate</p>
                    <p className="text-sm mt-2 px-2 text-stone-600 dark:text-slate-400">● 10 Quizzes ● 10 Articles <br /> ● 10 Problem Solving</p>
                    <h2 className="text-xl font-bold pt-5">Votes: {votes?.votesTotal} </h2>
                    <button className="bg-rose-500 py-2 w-full rounded-md mt-5">Vote</button>
                </div>
            </div>
        </div>
    );
};

export default VoteCard;