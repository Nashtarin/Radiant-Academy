import Head from "next/head";
import QuizzesSection from "../../components/QuizzesComponents/QuizzesSection";

const Quiz = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Quiz</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* QUIZ CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <QuizzesSection/>

    </div>
  );
};

export default Quiz;