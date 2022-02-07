import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-4xl text-blue-600 font-bold text-center mt-5'>This is a heading</h1>
    </div>
  )
}
