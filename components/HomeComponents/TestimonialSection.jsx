import Image from "next/image"

const TestimonialSection = () => {
    return (
        <div className="w-5/6 mx-auto mt-14 mb-20">
            <h1 className="text-4xl	font-bold text-violet-800 pt-7 pb-16 text-center">What others are saying</h1>
            <div className="mx-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div className="rounded-xl bg-slate-100 shadow-xl hover:shadow-zinc-400 transition duration-300 px-3">
                    <p className="text-black text-xl my-5 w-5/6 mx-auto">I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. </p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_1.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant Academy</h4>
                </div>
                <div className="rounded-xl bg-slate-100 shadow-xl hover:shadow-zinc-400 transition duration-300 px-3">
                    <p className="text-black text-xl my-5 w-5/6 mx-auto">I used to look at HTML and CSS and feel confused and overwhelmed, now I see possibility.I was immediately able to transform a non-responsive and visually outdated page into an on-brand.</p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_2.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant Academy</h4>
                </div>
                <div className="rounded-xl bg-slate-100 shadow-xl hover:shadow-zinc-400 transition duration-300 px-3">
                    <p className="text-black text-xl my-5 w-5/6 mx-auto">Loved the learning environment created by Sam. I could tell he wanted us to enjoy ourselves and that he cared about making us feel at ease. I couldn’t have done this without your course, thank you.</p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_3.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant Academy</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;