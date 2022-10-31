import '../styles/globals.css'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import React from 'react';
// import Scripts from '../components/global/scripts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        {/* <Scripts></Scripts> */}
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </React.StrictMode>
    </>
  )
}

export default MyApp
