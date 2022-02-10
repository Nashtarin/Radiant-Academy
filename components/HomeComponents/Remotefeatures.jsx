import Image from 'next/image';
import Link from 'next/link';
import p1 from '../images/1.png'
import p2 from '../images/2.png'
import p3 from '../images/3.png'

const Remotefeatures = () => {
    return (
        <div className="container mx-auto" >
            <h1 className="text-violet-700 text-6xl font-bold text-center mt-6">Remote Features</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8 gap-x-4'>
                <div className='bg-slate-100 rounded-lg px-4 mb-8'>
                    <div className='grid place-content-center my-4'>
                        <Image
                            src={p1}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                        />
                    </div>
                    <h3 className='text-center text-3xl	font-bold text-black mb-4'>Quiz System</h3>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo consectetur quis facere, pariatur quibusdam!</p>
                    <Link href="/learn">
                        <p className='text-center text-1xl	font-bold text-violet-600 my-4'><a>Learn More &#x3e;</a></p>
                    </Link>
                </div>
                <div className='bg-slate-100 rounded-lg px-4 mb-8'>
                    <div className='grid place-content-center my-4'>
                        <Image
                            src={p2}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                        />
                    </div>
                    <h3 className="text-center text-3xl	font-bold text-black mb-4">Code Editor</h3>
                    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, sequi voluptates odio architecto ex.</p>
                    <Link href="/learn">
                    <p className='text-center text-1xl	font-bold text-violet-600 my-4'><a>Learn More &#x3e;</a></p>
                    </Link>
                </div>
                <div className='bg-slate-100 rounded-lg px-4 mb-8'>
                    <div className='grid place-content-center my-4'>
                        <Image
                            src={p3}
                            alt="Landscape picture"
                            width="100px"
                            height="100px"
                        />
                    </div>
                    <h3 className="text-center text-3xl	font-bold text-black mb-4">Online Forum</h3>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur eaque velit praesentium nulla officiis!</p>
                    <Link href="/learn">
                    <p className='text-center text-1xl	font-bold text-violet-600 my-4'><a>Learn More &#x3e;</a></p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Remotefeatures;