
const Footer = () => {
    return (
        <div className=" bg-slate-900 text-white text-center w-full  bottom-0">
            <div className="flex flex-col lg:flex-row justify-between items-center w-4/6 mx-auto pt-10">
                <div>
                    <h2 className="title-font text-rose-500 font-medium tracking-widest text-sm mb-3">Our Branches</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-400 hover:text-white">Dhaka</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Chattagram</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Sylhet</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Rajshahi</a>
                        </li>
                    </nav>
                </div>
                <div>
                    <h2 className="title-font font-medium text-rose-500 tracking-widest text-sm mb-3">Important Links</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-400 hover:text-white">About Us</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Contact US</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Newsletter</a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white">Career</a>
                        </li>
                    </nav>
                </div>
                <div>
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                    <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">E-mail</label>
                            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-slate-500 focus:border-rose-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:custom-pink-lite rounded">Subscribe</button>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Weekly newsletter & so on
                    </p>
                </div>
            </div>
            <p className="pt-20 pb-5"> <small className="text-gray-400">© Copyright Protected | <span className="text-rose-500">Radiant Academy</span> </small> </p>
        </div>
    );
};

export default Footer;