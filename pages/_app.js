import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

// import Layout from '@/components/Layout';

import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  NProgress.configure({showSpinner: false});
  
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('hashChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>Real State</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
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
