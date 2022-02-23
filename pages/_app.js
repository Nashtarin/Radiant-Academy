import { Provider } from 'react-redux';
import { store } from '../utilities/redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import AuthProvider from '../utilities/Contexts/AuthProvider/AuthProvider';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
