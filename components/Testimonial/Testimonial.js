import Image from "next/image"

const Testimonial = () => {
    return (
        <div className="container mx-auto my-14">
            <h1 className="text-4xl	font-bold text-violet-900 my-10 text-center">What others are saying</h1>
            <div className="mx-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="rounded border border-slate-400 hover:shadow-lg hover:shadow-slate-400 px-3">
                    <p className="text-black text-xl my-5">I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you.</p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_1.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant.academy</h4>
                </div>
                <div className="rounded border border-slate-400 hover:shadow-lg hover:shadow-slate-400 px-3">
                    <p className="text-black text-xl my-5">I used to look at HTML and CSS and feel confused and overwhelmed, now I see possibility.I was immediately able to transform a non-responsive and visually outdated page into an on-brand, modern template that looks great on desktop and mobile.</p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_2.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant.academy</h4>
                </div>
                <div className="rounded border border-slate-400 hover:shadow-lg hover:shadow-slate-400 px-3">
                    <p className="text-black text-xl my-5">Loved the learning environment created by Sam. I could tell he wanted us to enjoy ourselves and that he cared about making us feel at ease. I couldn’t have done this without your course, thank you.</p>
                    <div className="grid place-content-center my-4">
                        <Image
                            src="/img/user_3.webp"
                            height="100"
                            width="100"
                            alt=""
                        />
                    </div>
                    <h4 className="text-1xl	font-bold text-violet-900 text-center">Happy User</h4>
                    <h4 className="text-1xl	font-bold text-violet-900 mb-5 text-center">Radiant.academy</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;