import '../styles/globals.css'
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Scripts from '../components/global/Scripts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Scripts></Scripts> */}
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
