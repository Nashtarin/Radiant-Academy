import Layout from '../components/Layout'
import '../styles/globals.css'
import AuthProvider from '../utilities/Contexts/AuthProvider/AuthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
