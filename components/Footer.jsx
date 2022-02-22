import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className="px-20 mt-12 h-[200px]">
                <div className="grid md:grid-cols-[200px_minmax(600px,_1fr)]">
                    <div className="flex justify-center items-start">
                        <div className="shadow-md">
                            <Image src="https://i.postimg.cc/sDvkgk3h/logo.png" alt="Logo" width="80px" height="80px" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-2xl font-bold">Join Radiant Academy to unleash your unstoppable coding potential</h2>
                        </div>
                        <div className="grid md:grid-cols-[350px_minmax(600px,_1fr)]">
                            <div className="pt-8 pr-5">
                                <p>
                                    1 thousand+ Junior Developers
                                    from 140 countries
                                    have already joined Radiant Academy.
                                </p>
                            </div>
                            <div className="pt-7">
                                <h3 className="text-purple-800 text-lg font-bold">Important Links</h3>
                                <div className="grid grid-cols-4 pt-3">
                                    <div>
                                        <Link href="#" className="mb-1">Home</Link><br />
                                        <Link href="#">Problem Solving</Link>
                                    </div>
                                    <div className="pl-5">
                                        <Link href="#" className="mb-1">Blogs</Link>
                                        <br />
                                        <Link href="#">Forum</Link>
                                    </div>
                                    <div>
                                        <Link href="#" className="mb-1">Account</Link><br />
                                        <Link href="#">Payment</Link>
                                    </div>
                                    <div>
                                        <Link href="#">Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[60px] flex justify-around items-end px-5" style={{ backgroundColor: '#32007E' }}>
                <div className="flex justify-center items-center">
                    <Image src="https://i.postimg.cc/W4PCStgG/search-logo.png" alt="Logo" width="90px" height="90px" className="mb-4" />
                    <div className="px-4 pt-7">
                        <p className="text-white font-sm">Search for H2H coding competitions to win 100% bonus up to 100 Radiant points*</p>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <button className="px-8 py-1.5 text-md font-bold rounded-full shadow-md" style={{ backgroundColor: '#FFCA30' }}>
                        Start Now!
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Footer;