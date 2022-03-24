import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { FaHeadset } from "react-icons/fa";

const Footer = () => {
    window.onload = (function () {
        setTimeout(() => {
            const chatBtn = document.getElementById("chat-icon");
            chatBtn.classList.toggle("expanded");
        }, 3000);
    });

    function helpLine(){
        const chatBtn = document.getElementById("chat-icon");
        chatBtn.classList.toggle("expanded");
    };

    window.onscroll = (function () {
        if (window.scrollY > 15) {
            document.getElementById("sticky").classList.add("popup");
            document.getElementById("sticky2").classList.add("popup2");
        } else {
            document.getElementById("sticky").classList.remove("popup");
            document.getElementById("sticky2").classList.remove("popup2");
        }
    });

    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <div className="px-1 sm:px-10 md:px-20 pt-8 md:pt-20 pb-[29rem] sm:pb-[25rem] md:pb-[17rem] h-[600px] sm:h-[0px] md:h-[430px] lg:h-[300px] bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 block">
                <div className="grid grid-row-1 md:grid-cols-[100px_minmax(300px,_1fr)] lg:grid-cols-[200px_minmax(600px,_1fr)]">
                    <div className="flex justify-center items-start">
                        <Image src="https://i.postimg.cc/sDvkgk3h/logo.png" alt="Logo" width="80px" height="80px" className="cursor-pointer shadow-md" draggable="false" />
                    </div>
                    <div className="px-9 pt-5 text-center sm:text-left sm:px-0 sm:pt-0">
                        <div>
                            <h2 className="text-2xl font-bold">Join Radiant Academy to unleash your unstoppable coding potential</h2>
                        </div>
                        {/* <div className="grid md:grid-cols-[250px_minmax(320px,_1fr)] lg:grid-cols-[350px_minmax(600px,_1fr)]"> */}
                        <div className="grid md:grid-cols-[250px_minmax(320px,_1fr)] lg:grid-cols-2">
                            <div className="pt-4 md:pt-8 pr-5">
                                <p>
                                    1k+ Junior Developers
                                    from 140 countries
                                    have already joined Radiant Academy.
                                </p>
                            </div>
                            <div className="pt-3.5 md:pt-7">
                                <h3 className="text-violet-800 dark:text-violet-400 text-lg font-bold">Important Links</h3>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3 pb-6 my-4">
                                    <div className="text-left">
                                        <Link href="/" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Home</span>
                                        </Link><br />
                                        <Link href="/problem-solving" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Problem Solving</span>
                                        </Link>
                                    </div>
                                    <div className="text-right sm:text-left sm:pl-5 md:pl-0 lg:pl-5">
                                        <Link href="/blogs" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Blogs</span>
                                        </Link>
                                        <br />
                                        <Link href="/forum" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Forum</span>
                                        </Link>
                                    </div>
                                    <div className="text-left">
                                        <Link href="/profile" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Account</span>
                                        </Link><br />
                                        <Link href="" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">Payment</span>
                                        </Link>
                                    </div>
                                    <div className="text-right sm:text-left">
                                        <span className="mb-1 hover:text-rose-600 cursor-pointer">Privacy Policy</span><br />
                                        <Link href="/about" passHref>
                                            <span className="mb-1 hover:text-rose-600 cursor-pointer">About Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-footer hidden md:block w-full fixed left-0 right-0 bottom-0" id="sticky">
                <style jsx global>
                    {`
                        .sticky-footer {
                            bottom: -204px;
                            -webkit-transition: bottom .2s ease-in-out;
                            transition: bottom .2s ease-in-out;
                        }
                        .popup {
                            bottom: calc(-24px);
                        }
                    `}
                </style>
                <div className="h-[150px] sm:h-[60px] flex justify-around items-end px-5 md:px-12 lg:px-5 flex-col sm:flex-row" style={{ backgroundColor: '#32007E' }}>
                    <div className="flex justify-center items-center">
                        <Image src="https://i.postimg.cc/W4PCStgG/search-logo.png" alt="Logo" width="90px" height="90px" className="mb-4" draggable="false" />
                        <div className="px-4 pt-3 md:pt-5 lg:pt-7">
                            <p className="text-white font-sm">Search for H2H coding competitions to win 100% bonus up to 100 Radiant points*</p>
                        </div>
                    </div>
                    <div className="h-full flex items-center">
                        <button className=" bg-rose-500 text-white px-4 md:px-8 py-2 text-md font-bold rounded-full shadow-md sm:w-[120px] md:w-[150px]  lg:w-full">
                            <Link href="/courses">Start Now!</Link>
                        </button>
                    </div>
                </div>`
            </div>

            <button className="stickyGoToTop fixed right-5 btn btn-ghost rounded-btn m-5 dark:text-slate-200" id="sticky2" onClick={topFunction}>
                <style jsx global>
                    {`
                        .stickyGoToTop {
                            bottom: -60px;
                            -webkit-transition: bottom .2s ease-in-out;
                            transition: bottom .2s ease-in-out;
                            z-index: 9999;
                        }
                        .popup2 {
                            bottom: 60px;
                        }
                    `}
                </style>
                <BsArrowUpCircleFill style={{ fontSize: 25 }} />
            </button>

            <div id="chat-bot">
               
                    <div className="icon" id="chat-icon" onClick={() => helpLine()}>
                        <Link href="/video-chat" passHref>
                            <div className="user">
                                Call Radiant Help Center!
                            </div>
                        </Link>
                        <FaHeadset className="text-4xl"/>
                    </div>
                <style jsx>
                        {`
                            #chat-bot {
                                position: fixed;
                                bottom: 5rem;
                                right: 6rem;
                                z-index: 99999999999999999;
                                height: auto;
                                float: right;
                            }
                            #chat-bot .icon {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                text-align: center;
                                cursor: pointer;
                                color: #ffffff;
                                background: #7157F6;
                                width: 50px;
                                height: 50px;
                                float: right;
                                border-radius: 10px;
                                padding: 10px 15px;
                                transition: 0.2s all;
                                overflow: hidden;
                            }
                            #chat-bot .icon .user {
                                visibility: hidden;
                                margin-left: -100px;
                            }
                            #chat-bot .icon.expanded {
                                width: 270px;
                                justify-content: space-between;
                            }
                            
                            #chat-bot .icon.expanded .user {
                                visibility: visible;
                                margin-left: 0;
                                transition: 0.5s;
                            }
                        `}
                </style>
            </div>
        </div >
    );
};

export default Footer;