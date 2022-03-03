import emailjs from '@emailjs/browser';
import React from 'react';

const contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'radiant_academy', e.target, 'user_YkJkSWKqQwdoELEotZTxP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 mx-auto py-[5rem] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
=======
            <div className="grid grid-cols-1 mx-auto py-[5rem] text-slate-200">
>>>>>>> 5845b31a758cc414e1ebc524f61f32a451a2f5dd
                <div className="pb-6">
                    <h1 className="text-4xl font-bold text-center">Contact with us!</h1>
                </div>
                <div className="px-7 md:w-3/5 lg:w-3/6 xl:w-2/6 flex flex-col mx-auto">
                    <form onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Type Your Name"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-4"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Type Your Email"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-4"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Type Your Subject"
                            className="bg-slate-200 w-full py-2 px-3 outline-none rounded-lg mb-4"
                            required
                        />
                        <textarea
                            className="bg-slate-200 border-2 w-full h-[120px] outline-none py-2 px-3 resize-none rounded-lg mb-4"
                            name="message"
                            placeholder="Type your comment here!"
                            required
                        ></textarea>
                        <button type="submit" className="px-4 md:px-8 py-2 text-lg font-bold rounded-full shadow-md w-[100px] sm:w-[120px] md:w-[150px] lg:w-[150px] float-right dark:text-slate-700 text-black" style={{ backgroundColor: '#FFCA30' }}>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default contact;