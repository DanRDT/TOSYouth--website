import '../styles/globals.css'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
// import Scripts from '../components/global/scripts';

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
