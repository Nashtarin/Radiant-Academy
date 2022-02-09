import Image from 'next/image';
import Link from 'next/link';
import p1 from '../images/1.png'
import p2 from '../images/2.png'
import p3 from '../images/3.png'

const Remotefeatures = () => {
    return (
        <div className="container mx-auto" >
            <h1 className="text-violet-700 text-3xl font-bold mx-96 mt-4">Remote Features</h1>
            <div className='grid grid-cols-3  my-8 m-10 gap-x-4'>
                <div className='bg-slate-100 rounded-lg'>
                    <Image
                        src={p1}
                        alt="Landscape picture"
                        width="100px"
                        height="100px"
                        className='ml-96'
                    />
                    <h3 className='text-center'>Quiz System</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo consectetur quis facere, pariatur quibusdam!</p>
                    <Link href="/learn">
                        <a>Learn More</a>
                    </Link>
                </div>
                <div className='bg-slate-100 rounded-lg'>
                    <Image
                        src={p2}
                        alt="Landscape picture"
                        width="100px"
                        height="100px"
                    />
                    <h3 className="text-center">Code Editor</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, sequi voluptates odio architecto ex.</p>
                    <Link href="/learn">
                        <a>Learn More</a>
                    </Link>
                </div>
                <div className='bg-slate-100 rounded-lg'>
                    <Image
                        src={p3}
                        alt="Landscape picture"
                        width="100px"
                        height="100px"
                    />
                    <h3 className="text-center">Online Forum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur eaque velit praesentium nulla officiis!</p>
                    <Link href="/learn">
                        <a>Learn More</a>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Remotefeatures;