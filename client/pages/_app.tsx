import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import React from 'react';
import useScripts from '../components/global/scripts';
import { CartProvider } from "../components/context/cartContext";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  useScripts({pageProps});

  return (
    <>
      <React.StrictMode>
        <CartProvider>
          <Header/>
          <Component {...pageProps} />
          <Analytics/>
        </CartProvider>
        <Footer/>
      </React.StrictMode>
    </>
  )
}

export default MyApp