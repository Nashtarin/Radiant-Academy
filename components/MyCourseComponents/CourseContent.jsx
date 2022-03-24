import Link from "next/link";
import { FaBookmark, FaStar, FaStarHalf, FaArrowRight } from 'react-icons/fa';
import { BiRightArrow } from 'react-icons/bi';

const CourseContent = ({ course }) => {
    return (
        <div className='bg-white dark:bg-[#2f3c4f]'>
            <div className="py-12 px-10 lg:px-32 text-slate bg-white-900 dark:bg-slate-800 dark:text-white">
                <div className="text-white bg-slate-800 dark:bg-slate-600 p-10 rounded">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h1 className="my-1 text-[2.1em] font-medium">
                                {course?.data.title}
                            </h1>
                            <p className="flex items-center">
                                <FaBookmark className="text-orange-500" /> &nbsp; {course?.data.subtitle}
                            </p>
                            <div className="flex items-center text-rose-500 my-3">
                                <span className="flex items-center text-2xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                                <span className="text-white text-[1em]">(45)</span>
                            </div>
                            <p className="text-sm mt-2">● 10 Quizzes ● 10 Articles ● 10 Problem Solving</p>
                        </div>
                        <div className="flex flex-col py-10 md:py-0">
                            <Link href={`/quiz/${course?.data._id}`} passHref>
                                <button className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 flex justify-center items-center mx-auto">
                                    START QUIZ NOW &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '2px' }} />
                                </button>
                            </Link>
                            <p className="text-sm text-stone-300 mt-4 mx-4">* <span className='text-orange-500'>25</span> Already Enrolled!</p>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-slate-400 dark:border-slate-600 my-6 shadow-md"></div>
                <div className="mx-auto w-5/6 text-slate-800 dark:text-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3 py-4 bg-slate-100 dark:bg-slate-600">
                        <a href="#articles" className="text-center text-xl font-medium text-purple-900 dark:text-violet-300">Articles</a>
                        <a href="#quizzes" className="text-center text-xl font-medium text-stone-500 dark:text-violet-300">Quizzes</a>
                        <a href="#problem-solving" className="text-center text-xl font-medium text-stone-500 dark:text-violet-300">Problem Solving</a>
                    </div>
                </div>
                <div className="py-16">
                    <section id="articles">
                        <h1 className="text-3xl mb-2 text-rose-500">A Complete Guide to Flexbox</h1>
                        <h3 className="text-xl mt-3 mb-2">What is Flexbox?</h3>
                        <article>
                            Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.
                            <br /><br />
                            The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow. Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).
                            <br /><br />
                            <span className="font-medium">Note:</span> Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.
                        </article>
                        <h3 className="text-xl mt-3 mb-2">Flexbox Properties</h3>
                        <article>
                            <span className="font-medium">● display:</span> This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.<br />
                            <span className="font-medium">● order:</span> By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.<br />
                            <span className="font-medium">● flex-direction:</span> This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.<br />
                            <span className="font-medium">● flex-grow:</span> This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).<br />
                            <span className="font-medium">● flex-wrap:</span> By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.<br />
                            <span className="font-medium">● flex-shrink:</span> This defines the ability for a flex item to shrink if necessary.<br />
                            <span className="font-medium">● flex-flow:</span> This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.<br />
                            <span className="font-medium">● flex-basis:</span> This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.<br />
                            <span className="font-medium">● flex:</span> This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, like flex: 5;, that changes the flex-basis to 0%, so it’s like setting flex-grow: 5; flex-shrink: 1; flex-basis: 0%;.<br />
                            <span className="font-medium">● justify-content:</span> This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.<br />
                            <span className="font-medium">● align-self:</span> This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Please see the align-items explanation to understand the available values.<br />
                            <span className="font-medium">● align-items:</span> This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).<br />
                            <span className="font-medium">● align-content:</span> This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.<br />
                            <span className="font-medium">● gap, row-gap, column-gap:</span> The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.<br />
                        </article>
                        <h3 className="text-xl mt-3 mb-2">Examples</h3>
                        <article>Let’s start with a very very simple example, solving an almost daily problem: perfect centering. It couldn’t be any simpler if you use flexbox. This relies on the fact a margin set to auto in a flex container absorb extra space. So setting a margin of auto will make the item perfectly centered in both axes. Now let’s use some more properties. Consider a list of 6 items, all with fixed dimensions, but can be auto-sized. We want them to be evenly distributed on the horizontal axis so that when we resize the browser, everything scales nicely, and without media queries. Done. Everything else is just some styling concern. Below is a pen featuring this example. Be sure to go to CodePen and try resizing your windows to see what happens. Let’s try something else. Imagine we have a right-aligned navigation element on the very top of our website, but we want it to be centered on medium-sized screens and single-columned on small devices. Easy enough. Let’s try something even better by playing with flex items flexibility! What about a mobile-first 3-columns layout with full-width header and footer. And independent from source order. </article>
                        <div className="pt-5">
                            <a className="text-xl hover:text-rose-500 flex items-center" href="https://codepen.io/chriscoyier/pen/vWEMWw" target="_blank" rel="noopener noreferrer">Live Example <BiRightArrow style={{ fontSize: 20, marginLeft: 5 }} /></a>
                        </div>
                    </section>
                    <section id="problem-solving">
                        <div className="py-20 text-center">
                            <h1 className="text-4xl font-medium">Problem Solving</h1>
                            <h2 className="text-2xl text-green-500 mt-4">Coming Soon!</h2>
                        </div>
                    </section>
                    <section id="quizzes">
                        <Link href={`/quiz/${course?.data._id}`} passHref>
                            <button className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 my-10 flex justify-center items-center mx-auto">
                                START QUIZ NOW &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '2px' }} />
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;