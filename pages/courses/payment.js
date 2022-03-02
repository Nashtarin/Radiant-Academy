import Head from "next/head";
import PaymentSection from "../../components/CourseComponents/PaymentSection";

const Courses = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Payment</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <PaymentSection />
        </div>
    );
};

export default Courses;