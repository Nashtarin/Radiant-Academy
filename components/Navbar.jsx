import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import Logo from '../public/img/RA_Logo.png';
import { useDarkMode } from "../utilities/Hooks/useDarkMode";
import { BsFillCartFill, BsTrashFill } from 'react-icons/bs';
import useAuth from "../utilities/Hooks/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removeFromWishList } from "../utilities/redux/slices/courseSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user, logout } = useAuth();
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    const { wishList } = useSelector((state) => state.courses);

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        wishList.forEach((item, i) => {
            total += item.price;
            setTotalPrice(total);
        })
    }, [wishList]);

    const handleCartRemove = (id) => {
        dispatch(removeFromWishList(id));
        toast.success("Successfully removed from cart!", {
            position: "top-center"
        });
    }
    const allUsers = useSelector((state) => state.users.usersList);
    const thisUser = allUsers.find(userData => userData.email === user.email);

    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                    <div className="flex-1 pl-10 mx-2">
                        <Link href="/">
                            <a>
                                <div className="relative top-[9px]">
                                    <Image
                                        src={Logo}
                                        alt="Radiant Academy Logo"
                                        width="80px"
                                        height="80px"
                                        draggable="false"
                                    />
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className='items-center flex '>
                        <span className='px-2 text-slate-700 dark:text-slate-200'><FaMoon /></span>
                        {
                            isDarkMode ? <input type="checkbox" className="toggle bg-rose-500" onChange={toggleDarkMode} /> :
                                <input type="checkbox" className="toggle bg-rose-500" defaultChecked onChange={toggleDarkMode} />
                        }
                        <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                    </div>
                    <div className="hidden px-2 mx-2 lg:flex">
                        <div className="flex items-center">
                            <Link href='/'>
                                <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">HOME </a>
                            </Link>
                            <Link href="/courses">
                                <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">COURSES</a>
                            </Link>
                            <Link href="/forum">
                                <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">FORUM </a>
                            </Link>
                            <Link href="/code-editor">
                                <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">PLAYGROUND </a>
                            </Link>
                            {
                                wishList.length > 0 &&
                                <div className="flex-none dropdown dropdown-end mx-1 sm:mx-2 my-auto">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:border-purple-800 relative">
                                        <div className="rounded-full">
                                            <div className="flex-none my-auto pr-2 sm:mr-3 lg:mr-12">
                                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-transparent">
                                                    <BsFillCartFill className="text-xl" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="absolute text-xs rounded-full px-1 top-0 right-0 bg-rose-700 text-white z-10">{wishList.length}</div>
                                    </label>
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box border-solid w-52">
                                        {
                                            wishList.map((cart) => (
                                                <li key={cart._id}>
                                                    <div className="bg-slate-300 hover:bg-rose-500 hover:text-white dark:bg-slate-700 flex justify-between mt-1">
                                                        <Link href={`/courses/${cart._id}`} passHref>{cart.title}</Link><BsTrashFill className="text-lg" onClick={() => handleCartRemove(cart._id)} />
                                                    </div>
                                                </li>
                                            ))
                                        }
                                        <div className="p-4 justify-center flex">
                                            <Link href="/courses/payment" passHref>
                                                <button className="text-sm undefined hover:scale-110 focus:outline-none
                                                    flex justify-center px-4 py-2 rounded font-bold
                                                    hover:bg-rose-700 hover:text-white bg-violet-500 
                                                    text-white border duration-200 ease-in-out border-white-600 transition cursor-not-allowed" disabled>
                                                    Checkout ${totalPrice}
                                                </button>
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            }
                            {!user.isSignedIn &&
                                <Link passHref href="/register">
                                    <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white dark:hover:bg-slate-600 transition duration-500 mx-3">FREE TRIAL</button>
                                </Link>
                            }

                        </div>
                    </div>
                    {user.isSignedIn &&
                        <div className="flex-none dropdown dropdown-end mx-1 sm:mx-2 my-auto lg:pr-10">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:border-purple-800">
                                <div className="rounded-full">
                                    {
                                        user.photo ? <Image src={user.photo} alt="User Profile" width="90px" height="90px" draggable="false" /> :
                                            <div className="flex-none my-auto pr-2 sm:mr-3 lg:mr-12">
                                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-transparent">
                                                    <div className="rounded-full">
                                                        <FaUserCircle className="text-4xl" />
                                                    </div>
                                                </label>
                                            </div>
                                    }
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 relative top-10 shadow menu menu-compact dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52">
                                <li>
                                    <Link href={`/profile/${user.email}`}>
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Profile
                                        </a>
                                    </Link>
                                </li>
                                {
                                    thisUser !== undefined ? thisUser.role === 'admin' && <li>
                                        <Link href="/dashboard">
                                            <a className=" hover:bg-rose-500 hover:text-white">
                                                Dashboard
                                                <span className="ml-2 badge">New</span>
                                            </a>
                                        </Link>
                                    </li> : ''
                                }
                                <li>
                                    <Link href={`/my-course/${user.email}`}>
                                        <a className=" hover:bg-rose-500 hover:text-white">My Course</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vote">
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Vote
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/canvas">
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Canvas
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={logout}>
                                    <a className=" hover:bg-rose-500 hover:text-white">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                            <li>
                                <Link href='/'>
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2">HOME </a>
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link href="/courses">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">COURSES</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forum">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">FORUM </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/code-editor">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">PLAYGROUND </a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/blogs">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">BLOGS </a>
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link href="/contact">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">CONTACT </a>
                                </Link>
                            </li>  */}
                            {!user.isSignedIn &&
                                <li className="text-white mt-3">
                                    <Link passHref href="/register">
                                        <button className="btn border-0 px-7 py-2 rounded-btn bg-rose-500 text-white transition duration-500 mx-3">FREE TRIAL</button>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
};

export default Navbar;