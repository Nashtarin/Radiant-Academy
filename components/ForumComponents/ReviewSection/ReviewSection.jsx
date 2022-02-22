import React from 'react';
import Image from 'next/image';

const ReviewSection = () => {
    return (
        <div className="lg:px-12 pb-10 h-full">
            <button className="px-8 py-2 text-white rounded-lg text-lg mb-4" style={{ backgroundColor: '#F05133' }}>Review (2)</button>
            <div className="bg-slate-100 pb-12">
                {/* Display Comment */}
                <div>
                    <div className="p-5 flex items-start mb-2">
                        <div className="px-2 pt-1.5 block w-[70px]">
                            <Image
                                src="https://i.postimg.cc/4dNK0r0W/people-1.png"
                                alt="User Picture"
                                height="100px"
                                width="100px"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-baseline px-2">
                                <h4 className="text-xl">John Doe</h4>
                                &nbsp; - &nbsp;
                                <p className="text-stone-400">16:51, 22 February, 2022</p>
                            </div>
                            <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nisl, ac nunc rutrum ut. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing tortor elit, ornare lorem facilisi purus. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing tortor elit, ornare lorem facilisi purus.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-start">
                        <div className="px-2 pt-1.5 block w-[70px]">
                            <Image
                                src="https://i.postimg.cc/26cqN0Rr/people-2.png"
                                alt="User Picture"
                                height="100px"
                                width="100px"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-baseline px-2">
                                <h4 className="text-xl">Jane Diana</h4>
                                &nbsp; - &nbsp;
                                <p className="text-stone-400">14:35, 22 February, 2022</p>
                            </div>
                            <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nisl, ac nunc rutrum ut. Volutpat sit faucibus sed eu integer eu nisl ss  sad a tincidunt donec. Ut adipiscing.</p>
                        </div>
                    </div>
                </div>

                {/* Add Comment */}
                <div className="px-6 lg:px-12 py-8 h-full">
                    <form>
                        <textarea className="bg-stone-200 border-2 w-full h-[100px] outline-none py-2 px-3" placeholder="Type your comment here!"></textarea>
                        <button type="submit" className="text-lg px-8 py-1.5 rounded-full mt-3 float-right" style={{ backgroundColor: '#FFCA30' }}>Comment</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ReviewSection;