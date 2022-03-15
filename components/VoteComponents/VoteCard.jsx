import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { dropVote } from "../../utilities/redux/slices/voteSlice";

const VoteCard = ({ votes }) => {
    const dispatch = useDispatch();
    const { _id, image, title, price, votesTotal } = votes;
    const [votesCount, setVotesCount] = useState(votesTotal);

    useEffect(() => {
        const exists = getStorage();

        let color_cart = {};
        if (exists) {
            color_cart = JSON.parse(exists);
            if (color_cart[_id]) {
                document.getElementById(`vote-${_id}`).classList.add('bg-rose-500');
            }
        }
    }, [_id])

    const handleVoting = (id) => {
        const loading = toast.loading('Please wait ...');
        let liked = false;

        const alreadyVoted = addToStorage(id, liked);

        if (alreadyVoted) {
            toast.dismiss(loading);
            toast("You've already added your vote!", {
                icon: '🥳',
            });
        } else {
            dispatch(dropVote(votes));
            document.getElementById(`vote-${id}`).classList.add('bg-rose-500');
            setVotesCount(votesCount + 1);
            toast.dismiss(loading);
            toast.success("You've voted this course!");
        }
    }

    //local storage utilities
    const addToStorage = (id, liked) => {
        const exists = getStorage();

        let vote_cart = {};
        if (!exists) {
            vote_cart[id] = 1;
            liked = false;
        }
        else {
            vote_cart = JSON.parse(exists);
            if (vote_cart[id]) {
                const newCount = vote_cart[id] + 1;
                vote_cart[id] = newCount;
                liked = true;
            }
            else {
                vote_cart[id] = 1;
                liked = false;
            }
        }
        updateStorage(vote_cart);
        return liked;
    }

    const getStorage = () => localStorage.getItem('vote_id');

    const updateStorage = cart => {
        localStorage.setItem('vote_id', JSON.stringify(cart));
    }

    return (
        <div className="text-slate-700 dark:text-slate-200 ">
            <div className="bg-slate-100 dark:bg-[#37465b] p-5 rounded-lg card-single">
                <div>
                    <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="Course Cover"
                            width="300px"
                            height="165px"
                            draggable="false"
                        />
                    </div>
                    <h2 className="text-xl py-2 font-semibold"> {title} </h2>
                    <h2> <span>$</span> {price} </h2>
                    <p className="text-slate-400 text-[0.9em]">#javascript #intermidiate</p>
                    <p className="text-sm mt-2 px-2 text-stone-600 dark:text-slate-400">● 10 Quizzes ● 10 Articles <br /> ● 10 Problem Solving</p>
                    <h2 className="text-xl font-bold pt-5">Votes: {votesCount} </h2>
                    <button className="bg-slate-500 hover:bg-rose-500 py-2 w-full rounded-md mt-5" id={`vote-${_id}`} onClick={() => handleVoting(_id)}>Vote</button>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default VoteCard;