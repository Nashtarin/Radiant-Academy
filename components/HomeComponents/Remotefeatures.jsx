import Image from 'next/image';
import p1 from '../images/1.png'

const Remotefeatures = () => {
    return (
        <div className="container" >
            <h1 className="text-violet-700 text-3xl font-bold">Remote Features</h1>
            <div>
                <div>
                    <Image
                        src={p1}
                        alt="Landscape picture"
                        width={100}
                        height={100}
                    />
                </div>
                {/* <div>
                    <img src="../images/2.png" alt="" />
                </div>
                <div>
                    <img src="../images/3.png" alt="" />
                </div> */}
            </div>

        </div>
    );
};

export default Remotefeatures;