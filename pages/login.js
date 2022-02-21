import Head from "next/head";
import LoginSection from "../components/AuthComponents/LoginSection";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Login</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOGIN CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <LoginSection/>

    </div>
  );
};

export default Login;
