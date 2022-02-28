import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import p1 from '../../public/img/1.png'
import p2 from '../../public/img/2.png'
import p3 from '../../public/img/3.png'

const FeatureSection = () => {
    return (
        <div className="w-5/6 mx-auto" >
            <h1 className="text-violet-800 text-5xl font-bold text-center py-7 ">Remote Features</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8 gap-x-4">
                <div className="bg-slate-100 rounded-lg px-4 mb-8">
                    <div className="grid place-content-center my-4">
                        <Image
                            src={p1}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                            draggable="false"
                        />
                    </div>
                    <h3 className="text-center text-3xl	font-bold text-rose-500 mb-4">Quiz System</h3>
                    <p className="text-center w-5/6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo consectetur quis facere, pariatur quibusdam!</p>
                    <Link href="/quiz" passHref>
                        <p className="text-center text-1xl font-bold text-violet-600 my-4 flex justify-center items-center cursor-pointer">
                            Learn More &nbsp; <FaArrowRight style={{ fontSize: '12px', marginTop: '3px' }} />
                        </p>
                    </Link>
                </div>
                <div className="bg-slate-100 rounded-lg px-4 mb-8">
                    <div className="grid place-content-center my-4">
                        <Image
                            src={p2}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                            draggable="false"
                        />
                    </div>
                    <h3 className="text-center text-3xl	font-bold text-rose-500 mb-4">Code Editor</h3>
                    <p className="text-center w-5/6 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, sequi voluptates odio architecto ex.</p>
                    <Link href="/codeeditor" passHref>
                        <p className="text-center text-1xl font-bold text-violet-600 my-4 flex justify-center items-center cursor-pointer">
                            Learn More &nbsp; <FaArrowRight style={{ fontSize: '12px', marginTop: '3px' }} />
                        </p>
                    </Link>
                </div>
                <div className="bg-slate-100 rounded-lg px-4 mb-8">
                    <div className="grid place-content-center my-4">
                        <Image
                            src={p3}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                            draggable="false"
                        />
                    </div>
                    <h3 className="text-center text-3xl	font-bold text-rose-500 mb-4">Online Forum</h3>
                    <p className="text-center w-5/6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur eaque velit praesentium nulla officiis!</p>
                    <Link href="/forum" passHref>
                        <p className="text-center text-1xl font-bold text-violet-600 my-4 flex justify-center items-center">
                            Learn More &nbsp; <FaArrowRight style={{fontSize: '12px', marginTop: '3px'}} />
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default FeatureSection;