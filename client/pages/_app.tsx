import '../styles/globals.css'
import Scripts from '../components/Scripts'
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Scripts/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
