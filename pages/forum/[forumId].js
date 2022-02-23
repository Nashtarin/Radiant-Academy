import Head from "next/head";
import Script from 'next/script';
import ForumPostDetails from "../../components/ForumComponents/ForumPostDetails";

const SingleForumPage = ({forum}) => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Single Forum Page</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* SINGLE FORUM CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumPostDetails forum={forum}/>
            
        </div>
    );
};

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get forums
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const forums = await res.json()
  
    // Get the paths we want to pre-render based on forums
    const paths = forums.map((forum) => ({
      params: { forumId: forum.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the forum `id`.
    // If the route is like /forums/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.forumId}`)
    const forum = await res.json()
  
    // Pass forum data to the page via props
    return { props: { forum } }
  }

export default SingleForumPage;