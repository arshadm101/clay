import Header from '../component/header';
import Footers from '../component/Footer'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
// import Layouts from '../component/Layout'

export default function App({ Component, pageProps }) {

  return (
    <>
  
      <Header />
      <Component {...pageProps} />
      <Footers/>
  
    </>
  )
}
