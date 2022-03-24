import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import p1 from '../../public/img/1.png'
import p2 from '../../public/img/2.png'
import p3 from '../../public/img/3.png'

const FeatureSection = () => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <div className="w-5/6 mx-auto " >
                <h1 className="text-violet-800 dark:text-violet-400 text-4xl md:text-5xl font-bold text-center py-7 ">Remote Features</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-8 gap-x-4">
                    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-5 mb-5">
                        <div className="grid place-content-center my-5">
                            <Image
                                src={p1}
                                alt="Landscape picture"
                                width="90px"
                                height="90px"
                                draggable="false"
                            />
                        </div>
                        <h3 className="text-center text-3xl	font-bold text-slate-700 dark:text-slate-100 mb-4">Quiz System</h3>
                        <p className="text-center w-5/6 mx-auto text-slate-500 dark:text-slate-400">Interactive Quiz features for learners to judge your coding skill in a time based quiz answering.</p>
                        <Link href="/courses" passHref>
                            <p className="text-center text-1xl font-bold text-violet-800 dark:text-violet-400 my-4 flex justify-center items-center cursor-pointer">
                                Learn More &nbsp; <FaArrowRight style={{ fontSize: '12px', marginTop: '3px' }} />
                            </p>
                        </Link>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white rounded-lg px-4  py-5 mb-5">
                        <div className="grid place-content-center my-5 ">
                            <Image
                                src={p2}
                                alt="Landscape picture"
                                width="90px"
                                height="90px"
                                draggable="false"
                            />
                        </div>
                        <h3 className="text-center text-3xl	font-bold text-slate-700 dark:text-slate-100 mb-4">Code Editor</h3>
                        <p className="text-center w-5/6 mx-auto text-slate-500 dark:text-slate-400">In built code editor for the purpose of practicing problems without leaving our site.</p>
                        <Link href="/code-editor" passHref>
                            <p className="text-center text-1xl font-bold text-violet-800 dark:text-violet-400 my-4 flex justify-center items-center cursor-pointer">
                                Learn More &nbsp; <FaArrowRight style={{ fontSize: '12px', marginTop: '3px' }} />
                            </p>
                        </Link>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-5 mb-5">
                        <div className="grid place-content-center my-5">
                            <Image
                                src={p3}
                                alt="Landscape picture"
                                width="90px"
                                height="90px"
                                draggable="false"
                            />
                        </div>
                        <h3 className="text-center text-3xl	font-bold text-slate-700 dark:text-slate-100 mb-4">Online Forum</h3>
                        <p className="text-center w-5/6 mx-auto text-slate-500 dark:text-slate-400">Online forum for a category based question answering for the different coding problems.</p>
                        <Link href="/forum" passHref>
                            <p className="text-center text-1xl font-bold text-violet-800 dark:text-violet-400 my-4 flex justify-center items-center">
                                Learn More &nbsp; <FaArrowRight style={{ fontSize: '12px', marginTop: '3px' }} />
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureSection;