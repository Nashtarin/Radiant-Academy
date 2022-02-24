import Link from "next/link";
import useAuth from "../utilities/Hooks/useAuth";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className="navbar bg-slate-200 h-[70px]">
                    <div className="flex-1 pl-10 mx-2">
                        <Link href="/">
                            <a><span className=" font-bold pl-2 text-lg md:text-2xl ">
                                Radiant Academy
                            </span></a>
                        </Link>
                    </div>
                    <div className="hidden px-2 mx-2 lg:flex pr-10">
                        <div className="flex items-center">
                            <Link href='/'>
                                <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-2">HOME </a>
                            </Link>
                            <Link href="/courses">
                                <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-3">COURSES</a>
                            </Link>
                            <Link href="/forum">
                                <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-3">FORUM </a>
                            </Link>
                            <Link passHref href="/register">
                                <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white transition duration-500 mx-3">FREE TRIAL</button>
                            </Link>
                            {user.email &&
                                <div className="flex-none dropdown dropdown-end mx-1 sm:mx-2 my-auto">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:border-purple-800">
                                        <div className="rounded-full">
                                            {
                                                user?.photoURL ? <Image src={user?.photoURL} alt="User Profile" width="90px" height="90px" draggable="false" /> :
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
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link href="/profile">
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/my-course">
                                                <a>My Course</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a>
                                                <button onClick={logout}>Logout</button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-2">
                            <li>
                                <Link href='/'>
                                    <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-2">HOME </a>
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link href="/courses">
                                    <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-3">COURSES</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forum">
                                    <a className="btn hover:bg-slate-300 btn-ghost rounded-btn mx-3">FORUM </a>
                                </Link>
                            </li>
                            <li className="text-white mt-3">
                                <Link passHref href="/register">
                                    <button className="btn border-0 px-7 py-2 rounded-btn bg-rose-500 text-white transition duration-500 mx-3">FREE TRIAL</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;