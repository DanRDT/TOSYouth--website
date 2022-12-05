import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import React from 'react';
import Scripts from '../components/global/scripts';
import { CartProvider } from "../components/context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <React.StrictMode>
        <Scripts/>
        <CartProvider>
          <Header/>
          <Component {...pageProps} />
        </CartProvider>
        <Footer/>
      </React.StrictMode>
    </>
  )
}

export default MyApp