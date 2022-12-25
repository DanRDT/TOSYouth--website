import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import React from 'react';
import useScripts from '../components/global/scripts';

export default function App({ Component, pageProps }: AppProps) {
  useScripts({pageProps});
  return (
    <>
      <React.StrictMode>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </React.StrictMode>
    </>
  )
}
