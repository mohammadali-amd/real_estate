import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

// import Layout from '@/components/Layout';

import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Real State</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
