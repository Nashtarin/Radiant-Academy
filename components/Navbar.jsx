import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import Logo from '../public/img/RA_Logo.png';
import useAuth from "../utilities/Hooks/useAuth";
import { useDarkMode } from "../utilities/Hooks/useDarkMode";

const Navbar = () => {

    const { user, logout } = useAuth();
    const [isDarkMode, toggleDarkMode] = useDarkMode();

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
                    <div className="hidden px-2 mx-2 lg:flex pr-10">
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
                            <Link href="/blogs">
                                <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">BLOGS </a>
                            </Link>
                            <Link passHref href="/register">
                                <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white dark:hover:bg-slate-600 transition duration-500 mx-3">FREE TRIAL</button>
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
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52">
                                        <li>
                                            <Link href="/profile">
                                                <a className=" hover:bg-rose-500 hover:text-white"> Profile</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard">
                                                <a className=" hover:bg-rose-500 hover:text-white">
                                                    Dashboard
                                                    <span className="ml-2 badge">New</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/my-course">
                                                <a className=" hover:bg-rose-500 hover:text-white">My Course</a>
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
                        </div>
                    </div>
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
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
                            <li>
                                <Link href="/blogs">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">BLOGS </a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/contact">
                                    <a className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">CONTACT </a>
                                </Link>
                            </li> */}
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