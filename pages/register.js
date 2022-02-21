import Head from "next/head";
import RegisterSection from "../components/AuthComponents/RegisterSection";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Register</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOGIN CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <RegisterSection/>

    </div>
  );
};

export default Login;
