import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import React from 'react';
import Scripts from '../components/global/scripts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <React.StrictMode>
        <Scripts/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </React.StrictMode>
    </>
  )
}
