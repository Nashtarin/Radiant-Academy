import Head from "next/head";
import QuizResult from "../../components/QuizzesComponents/QuizResult";

const Courses = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Quiz Result</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* QUIZ CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <QuizResult/>

    </div>
  );
};

export default Courses;