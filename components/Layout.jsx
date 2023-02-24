import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
   <>
      <Head>
         <title>Real State</title>
      </Head>
      <body>
         <header>
            <Navbar />
         </header>
         <main>
            {children}
         </main>
         <footer>
            <Footer />
         </footer>
      </body>
   </>
}

export default Layout;